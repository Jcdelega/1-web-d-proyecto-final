import { useState } from "react";

export default function NavControls({ onStart }) {
  const [mode, setMode] = useState("launch");

  return (
    <section className="p-4 border rounded-lg flex flex-col items-center gap-4">
      <h2 className="font-semibold">Nav Controls</h2>

      <div className="flex gap-4 items-center">
        <label>
          <input
            type="radio"
            name="mode"
            value="launch"
            checked={mode === "launch"}
            onChange={() => setMode("launch")}
          />
          Launch
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="land"
            checked={mode === "land"}
            onChange={() => setMode("land")}
          />
          Land
        </label>
      </div>

      <button
        className="bg-[var(--button)] text-white px-4 py-2 rounded"
        onClick={onStart}
      >
        Start Sequence
      </button>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {["↑","←","→","↓"].map(dir => (
          <button
            key={dir}
            className="bg-[var(--accent)] w-10 h-10 rounded text-lg"
          >
            {dir}
          </button>
        ))}
      </div>
    </section>
  );
}