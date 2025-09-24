export default function Banner({ pilot, ranger, idCode }) {
  return (
    <header className="w-full text-center border-b border-[var(--accent)] pb-2">
      <h1 className="text-3xl font-bold text-[var(--accent)]">COOPER CORP.</h1>
      <p>Ranger: {ranger} | Pilot: {pilot} | ID: {idCode}</p>
    </header>
  );
}