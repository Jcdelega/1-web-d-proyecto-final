
import Switch from "./Switch";

export default function NavControls({ onStart }) {

  return (
    <section className="p-4 border-2 border-stroke rounded-3xl flex flex-col items-center font-quantico">
      <h2 className="text-general-text text-xl">Nav Controls</h2>
      <p className='text-general-text'>Selector</p>
      <div className='flex'>
        <p className='px-2 '>Launch</p>
        <Switch />
        <p className='px-2'>Land
        </p>
      </div>
      <button
        className='
          my-1 rounded-full bg-button-1 px-2 font-semibold text-button-2
          hover:bg-button-2 focus:outline-none focus:ring-2 focus:ring-text-buttons
        '
        onClick={onStart}
      >
        Start Sequence
      </button>

      <div className="mt-1 p-4 border-2 border-stroke rounded-2xl shadow-lg/30 shadow-skyblue">
        <h3 className='text-text-buttons text-center'>Landing Control</h3>
        <div className='grid grid-cols-3 gap-2 mt-4'>
          {["↑", "←", "→", "↓"].map(dir => (
            <button
              key={dir}
              className="bg-text-buttons/50 border border-text-buttons w-10 h-10 rounded text-lg"
            >
              {dir}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}