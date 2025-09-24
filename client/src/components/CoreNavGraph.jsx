export default function CoreNavGraph({ distance, fuel }) {
  return (
    <section className="p-4 border rounded-lg flex flex-col items-center">
      <h2 className="font-semibold mb-2">Core Nav Graph</h2>
      {/* Replace with radar SVG or Canvas */}
      <div className="w-40 h-40 border border-[var(--accent)] rounded-full mb-4" />
      <p>Distance: {distance.toLocaleString()} KM</p>
      <p>Fuel: {fuel}%</p>
    </section>
  );
}