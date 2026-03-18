interface Props {
  carrito: number
}

function Navbar({ carrito }: Props) {

  return (

    <nav style={{
      background:"#0a7cff",
      padding:"15px",
      display:"flex",
      justifyContent:"space-between",
      color:"white",
      alignItems:"center"
    }}>

      <h2>Droguería</h2>

      <div>

        <a href="/home" style={{color:"white", marginRight:"20px"}}>
          Inicio
        </a>

        <span style={{
          background:"white",
          color:"#0a7cff",
          padding:"5px 10px",
          borderRadius:"20px",
          fontWeight:"bold"
        }}>
          🛒 {carrito}
        </span>

      </div>

    </nav>
  )
}

export default Navbar