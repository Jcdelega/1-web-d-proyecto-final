import {Link} from 'react-router-dom';
export default function Banner({ pilot, ranger, idCode }) {
  return (
    <header className="w-full text-center border-b-2 border-dashed border-skyblue/50 pb-2">
      <div className="flex justify-start">
        <figure className='flex align-middle mr-5'>
          <Link to="/register">
            <img className="m-2 justify-self-start" src="/fingerprint-skyblue.svg" alt="bordered blue fingerprint image" />
          </Link>
        </figure>
        <div className='flex'>
          <figure className='m-1 pr-2'>
            <img className='h-12 object-contain' src="/satellite.svg" alt="Satellite banner image" />
          </figure>
          <div className=''>
            <h1 className="justify-self-start mb-1 drop-shadow-lg drop-shadow-skyblue font-quantico text-2xl font-bold text-title">COOPER CORP.</h1>
            <h2 className='justify-self-start text-title font-quantico text-xl'>Ranger: {ranger}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between font-quantico text-general-text">
        <p className=''>
          Pilot:
          <span className='font-share-tech-mono text-dynamic-text'> {pilot} </span>
        </p>
        <p className=''>
          ID:
          <span className='font-share-tech-mono text-dynamic-text'> {idCode} </span>
        </p>
      </div>
    </header>
  );
}