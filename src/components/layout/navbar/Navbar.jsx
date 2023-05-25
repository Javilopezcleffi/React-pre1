import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <div>
        <h1>Casa Jardín</h1>
        <ul>
          <li>Macetas</li>
          <li>Plantas</li>
          <li>Herramientas</li>
          <CartWidget/>
        </ul>
    </div>
  )
}

export default Navbar
