import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import SectionsContainer from "./Components/SectionsContainer"
import Notificaciones from "./Components/Notificaciones"
import Reglamento from "./Components/Reglamento"
import Proveedores from "./Components/Proveedores"
import Expensas from "./Components/Expensas"
import MiCuenta from "./Components/pages/MiCuenta"

function App() {


  return (
    <>
      <NavBar/>
      <SectionsContainer/>
      <Routes>
        <Route path="/" element={<Expensas/>} />
        <Route path="/notificaciones" element={<Notificaciones/>}/>
        <Route path="reglamentos" element={<Reglamento/>}/>
        <Route path="/proveedores" element={<Proveedores/>}/>
        <Route path="/expensas" element={<Expensas/>}/>
        <Route path="/micuenta" element={<MiCuenta/>}/>
      </Routes>
    </>
  )
}

export default App
