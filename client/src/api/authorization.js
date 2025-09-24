import { api } from '../services/api';

export const registerRequest = (pilotAstronaut) => api.post("/register", pilotAstronaut)
export const loginRequest = (pilotAstronaut) => api.post("/login", pilotAstronaut)
export const sessionRequest = () => api.get("/session")
export const logoutRequest = () => api.post("/logout")