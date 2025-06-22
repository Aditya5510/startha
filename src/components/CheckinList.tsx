"use client";
import { useEffect, useState } from "react";

interface Checkin {
  time: string;
  question?: string;
  events?: string[];
}

export default function CheckinList() {
  const [checkins, setCheckins] = useState<Checkin[]>([]);

  useEffect(() => {
    async function fetchCheckins() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkins`);
      if (res.ok) {
        const data = await res.json();
        setCheckins(data.checkins || []);
      }
    }
    fetchCheckins();
  }, []);

  if (checkins.length === 0) {
    return <p className="text-gray-500">No check-ins available yet.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Morning Check-Ins</h2>
      <ul className="space-y-2">
        {checkins.map((c, idx) => (
          <li key={idx} className="border p-2 rounded">
            <div>
              <strong>{c.time}</strong>
            </div>
            {c.question && <div>{c.question}</div>}
            {c.events && (
              <ul className="list-disc list-inside">
                {c.events.length > 0 ? (
                  c.events.map((e, i) => <li key={i}>{e}</li>)
                ) : (
                  <li className="text-gray-500">No events for today.</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
