import Comunicados from "./Components/Comunicados"
import MiCuenta from "./Components/MiCuenta"
import Archivos from "./Components/Archivos"
import Dashboard from "./Components/Dashboard"
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
      <Dashboard/>
      <Routes>
        <Route path="/" element={<Comunicados/>}/>
        <Route path="/archivos" element={<Archivos/>}/>
        <Route path="/miCuenta" element={<MiCuenta/>}/>

      </Routes>
    </>
  )
}

export default App
