import './assets/styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ConsoleHome } from "./pages/ConsoleHome"
import { Registration } from "./pages/Registration"
import { Login } from "./pages/Login"
import { Session } from "./pages/Session"
import { PrivateRoute } from "./PrivateRoute"
import { AuthProvider } from "./context/AuthContext"
//import { Navbar } from "./components/NavBar"


export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<ConsoleHome />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          {/* Ruta privada */}

          <Route
            path='/session'
            element={
              <PrivateRoute>
                <Session />
              </PrivateRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
