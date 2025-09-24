export default function PlanetEventLog({ events, onNewEvent }) {
  return (
    <section className="p-4 border rounded-lg">
      <h2 className="font-semibold mb-2">Planet / Event Log</h2>
      <button
        className="bg-[var(--button)] text-white px-3 py-1 rounded mb-2"
        onClick={() => onNewEvent([...events, "New Discovery"])}
      >
        New Event
      </button>
      <ul className="max-h-32 overflow-y-auto space-y-1">
        {events.map((e, idx) => (
          <li key={idx} className="border-b border-gray-700">{e}</li>
        ))}
      </ul>
      <button className="text-[var(--accent)] mt-2">…</button>
    </section>
  );
}