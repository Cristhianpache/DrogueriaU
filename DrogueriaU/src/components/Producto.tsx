interface Props {
  nombre: string
  precio: number
  agregarAlCarrito: () => void
}

function Producto({ nombre, precio, agregarAlCarrito }: Props) {

  return (

    <div style={{
      minWidth: "200px",
      borderRadius: "12px",
      padding: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      background: "white"
    }}>

      <img
        src="https://via.placeholder.com/150"
        alt={nombre}
        style={{ borderRadius: "10px" }}
      />

      <h3>{nombre}</h3>

      <p style={{ color: "green", fontWeight: "bold" }}>
        ${precio}
      </p>

      <button
        onClick={agregarAlCarrito}
        style={{
          background: "#0a7cff",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        🛒 Comprar
      </button>

    </div>

  )
}

export default Producto