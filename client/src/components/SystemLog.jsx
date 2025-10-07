export default function SystemLog({ logs }) {
  return (
    <section className= 'border-2 border-stroke rounded-3xl flex flex-col justify-between font-quantico'>
      <h2 className="m-2 text-general-text text-xl">SYSTEM Log & Status</h2>
      <ul className="
        border-2 border-stroke inset-shadow-sm inset-shadow-dynamic-text/50 rounded-xl w-full max-h-50 overflow-y-auto text-dynamic-text font-share-tech-mono">
        {logs.map((log, idx) => (
          <li key={idx} className="text-sm">
            <span className="text-general-text font-quantico">[{log.time}]</span> {log.msg}
          </li>
        ))}
      </ul>
    </section>
  );
}