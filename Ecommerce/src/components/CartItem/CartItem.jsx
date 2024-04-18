import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartItem = ({id, name, cantidad, price, img}) => {
  const {removeItem} = useContext(CartContext)
  const handleRemove = ((id) => {
    removeItem(id)
  })
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
            <img src={img} alt={name} className="card-img"/>
        </picture>
      <section>
        <p>Cantidad: {cantidad}</p>
        <p>Precio x unidad: ${price}</p>
      </section>
      <footer>
        <p>Total: $ {price * cantidad}</p>
        <button onClick={() => handleRemove(id)}>X</button>
      </footer>
    </article>
  )
}

export default CartItem