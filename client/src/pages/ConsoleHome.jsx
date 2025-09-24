import Banner from "../components/Banner";
import NavControls from "../components/NavControls";
import PlanetEventLog from "../components/PlanetEventLog";
import CoreNavGraph from "../components/CoreNavGraph";
import SystemLog from "../components/SystemLog";
import { useState } from "react";

export const ConsoleHome =()=> {
  const [distance, setDistance] = useState(150856);
  const [fuel, setFuel] = useState(100);
  const [logs, setLogs] = useState([
    { time: "12:41", msg: "Take Off Initialized" },
    { time: "12:51", msg: "Target Set: Unknown" },
  ]);
  const [events, setEvents] = useState([
    "Earth", "Asteroid", "Mann (Planet)", "Black Hole", "Supernova"
  ]);

  // Simulate distance/fuel updates
  const startSequence = () => {
    setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), msg: "Start Sequence Triggered" }]);
    let d = distance;
    let f = fuel;
    const interval = setInterval(() => {
      d += 10;
      f = Math.max(0, f - 1);
      setDistance(d);
      setFuel(f);
      if (f === 0) clearInterval(interval);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center p-4 gap-4">
      <Banner pilot="Tars" ranger="ZTK" idCode="2031568513" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        <NavControls onStart={startSequence} />
        <PlanetEventLog events={events} onNewEvent={setEvents} />
        <CoreNavGraph distance={distance} fuel={fuel} />
        <SystemLog logs={logs} />
      </div>
    </div>
  );
}