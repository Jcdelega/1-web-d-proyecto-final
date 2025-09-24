import { createContext, useContext, useEffect, useState } from 'react';
import { logoutRequest, sessionRequest } from '../api/authorization.js';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [pilotAstronaut, setPilotAstronaut] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await sessionRequest();
        setPilotAstronaut(res.data);
      } catch (error) {
        setPilotAstronaut(null);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const logout = async () => {
    await logoutRequest();
    setPilotAstronaut(null);
  };

  return (
    <AuthContext.Provider value={{ pilotAstronaut, loading, logout, setPilotAstronaut }}>
      {children}
    </AuthContext.Provider>
  );
};