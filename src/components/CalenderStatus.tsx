"use client";
import { useEffect, useState } from "react";

export default function CalendarStatus({
  onConnected,
}: {
  onConnected: () => void;
}) {
  const [connected, setConnected] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkStatus() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/calendar/status`
      );
      if (res.ok) {
        const data = await res.json();
        if (data.connected) {
          setConnected(true);
          onConnected();
        } else {
          setConnected(false);
        }
      }
    }
    checkStatus();
  }, [onConnected]);

  if (connected === null) {
    return <p>Checking calendar connection...</p>;
  }
  if (!connected) {
    return (
      <a
        href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Connect Google Calendar
      </a>
    );
  }
  return null;
}
