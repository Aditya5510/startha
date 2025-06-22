"use client";
import { useState } from "react";
import CheckinList from "@/src/components/CheckinList";
import CalendarStatus from "@/src/components/CalenderStatus";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Wellness Concierge</h1>
      <div className="mb-4">
        <CalendarStatus onConnected={() => setReady(true)} />
      </div>
      {ready && <CheckinList />}
    </main>
  );
}
