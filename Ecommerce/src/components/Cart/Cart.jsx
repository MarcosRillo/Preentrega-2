import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, getTotal, getTotalQuantity} = useContext(CartContext)
    const total = getTotal();
    const totalQuantity = getTotalQuantity()
    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Menu</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart