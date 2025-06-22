import CheckinList from "@/src/components/CheckinList";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Wellness Concierge</h1>
      <div className="mb-4">
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Connect Google Calendar
        </a>
      </div>
      <CheckinList />
    </main>
  );
}
