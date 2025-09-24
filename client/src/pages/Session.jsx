import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom";
export const Session = () => {
  const { pilotAstronaut, logout } = useAuth()
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      
      <div className="
          w-[320px] sm:w-[400px] md:w-[500px] 
          rounded-4xl border border-2 border-border bg-panel p-6 text-center
          shadow-lg shadow-title sm:min-h-[568px] md:min-h-[700px]
        ">
        <h1 className="mb-4 text-2xl font-bold text-title">SESSION PROFILE</h1>
      {pilotAstronaut ? (
        <div className="pace-y-4 text-left border border-border shadow-md shadow-title p-2 text-general-text">
          <p>Pilot Call Sign: <strong>{pilotAstronaut.PilotCallSign}</strong></p>
          <p>Digital Communucation: <strong>{pilotAstronaut.DigitalCommunication}</strong></p>
          <button className="
              mt-6 w-full rounded bg-primary py-3 font-semibold text-general-text
              hover:bg-button-1 focus:outline-none focus:ring-2 focus:ring-skyblue
            " onClick={logout}>CLOSE MY DASHBOARD SESSION</button>
        </div>
      ) : (
        <p>Loading Information...</p>
      )}
      
      <p className="mt-3 text-general-text"><Link to="/">PANE DASHBOARD</Link></p>
      </div>
    </div>
  )
}
