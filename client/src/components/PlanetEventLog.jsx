export default function PlanetEventLog({ events, onNewEvent }) {
  return (
    <section className=' border-2 border-stroke rounded-3xl flex flex-col items-center font-quantico'>
      <h2 className="text-general-text text-xl m-4">Planet / Event Log</h2>
      <button
        className="
        hover:bg-button-1 focus:outline-none focus:ring-2 focus:ring-skyblue
        text-white px-3 py-1 border-1 border-stroke rounded-xl mb-2"
        onClick={() => onNewEvent([...events, "New Discovery"])}
      >
        New Event
      </button>
      <ul className="border border-stroke rounded-xl w-full max-h-32 overflow-y-auto space-y-1">
        {events.map((e, idx) => (
          <li key={idx} className="text-start pl-4 font-share-tech-mono text-sm">{e}</li>
        ))}
      </ul>
      <button className="text-general-text mt-2">…</button>
    </section>
  );
}