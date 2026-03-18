import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {

  const [carrito, setCarrito] = useState(0)

  const agregarAlCarrito = () => {
    setCarrito(carrito + 1)
  }

  return (

    <BrowserRouter>

      <Navbar carrito={carrito} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <Home agregarAlCarrito={agregarAlCarrito} />
        } />
      </Routes>

    </BrowserRouter>

  )
}

export default App