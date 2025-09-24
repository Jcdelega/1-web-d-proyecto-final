import { Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export const PrivateRoute = ({children}) => {

  const { pilotAstronaut, loading } = useAuth()

  if(loading) return <p>Loading...</p>
  

  return pilotAstronaut ? children : <Navigate to='/login'/>
}