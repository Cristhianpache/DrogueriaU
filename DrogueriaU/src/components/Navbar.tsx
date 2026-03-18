function Navbar() {

  return (

    <nav
      style={{
        background:"#0a7cff",
        padding:"15px",
        display:"flex",
        justifyContent:"space-between",
        color:"white"
      }}
    >

      <h2>Droguería</h2>

      <div>

        <a
          href="/"
          style={{color:"white", marginRight:"20px", textDecoration:"none"}}
        >
          Inicio
        </a>

        <a
          href="/login"
          style={{color:"white", textDecoration:"none"}}
        >
          Login
        </a>

      </div>

    </nav>

  )
}

export default Navbar