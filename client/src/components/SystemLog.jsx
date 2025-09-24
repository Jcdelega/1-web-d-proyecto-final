export default function SystemLog({ logs }) {
  return (
    <section className="p-4 border rounded-lg">
      <h2 className="font-semibold mb-2">System Log & Status</h2>
      <ul className="max-h-40 overflow-y-auto space-y-1">
        {logs.map((log, idx) => (
          <li key={idx} className="text-sm">
            <span className="text-[var(--accent)]">[{log.time}]</span> {log.msg}
          </li>
        ))}
      </ul>
    </section>
  );
}