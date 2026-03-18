import Producto from "../components/Producto"

interface Props {
  agregarAlCarrito: () => void
}

function Home({ agregarAlCarrito }: Props) {

  const productos = [
    { id: 1, nombre: "Acetaminofén", precio: 5000 },
    { id: 2, nombre: "Ibuprofeno", precio: 8000 },
    { id: 3, nombre: "Jarabe", precio: 12000 },
    { id: 4, nombre: "Vitamina C", precio: 9000 }
  ]

  return (

    <div style={{ padding: "20px" }}>

      <h1 style={{ textAlign: "center", color: "#0a7cff" }}>
        Productos
      </h1>

      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: "20px",
        padding: "10px",
        scrollBehavior: "smooth"
      }}>
        
        {productos.map(p => (
          <Producto
            key={p.id}
            nombre={p.nombre}
            precio={p.precio}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}

      </div>

    </div>
  )
}

export default Home