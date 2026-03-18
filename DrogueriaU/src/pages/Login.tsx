import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mensaje, setMensaje] = useState("")

  const usuarios = [
    { email: "admin@drogueria.com", password: "1234", rol: "admin" },
    { email: "cliente@drogueria.com", password: "1234", rol: "cliente" }
  ]

  const manejarLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const usuario = usuarios.find(
      u => u.email === email && u.password === password
    )

    if (!usuario) {
      setMensaje("Usuario incorrecto")
      return
    }

    navigate("/home")
  }

  return (

    <div style={{textAlign:"center", marginTop:"100px"}}>

      <h2>Login Droguería</h2>

      <form onSubmit={manejarLogin}>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Ingresar</button>

      </form>

      <p>{mensaje}</p>

    </div>
  )
}

export default Login