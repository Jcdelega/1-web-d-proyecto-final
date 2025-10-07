export default function CoreNavGraph({ distance, fuel }) {
  return (
    <section className="text-general-text p-2 border-2 border-stroke rounded-3xl flex flex-col items-center font-quantico">
      <h2 className="text-xl mb-2">Core Nav Graph</h2>
      {/* Replace with radar SVG or Canvas */}
      <div className="w-40 h-40 border border-general-text rounded-full mb-4" />
      <div className='flex gap-5'>
        <div className=''>
          <p className=''>Distance: </p>
          <strong className='text-dynamic-text font-share-tech-mono'>{distance.toLocaleString()} KM</strong>
        </div>
        <div>
          <p className=''>Fuel: </p>
          <strong className='text-dynamic-text font-share-tech-mono'>{fuel}%</strong>
        </div>
      </div>
    </section>
  );
}