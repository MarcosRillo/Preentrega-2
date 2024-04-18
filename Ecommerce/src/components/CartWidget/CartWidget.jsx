
import cart from './assets/cart.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link to='/cart'>
      <img src={cart} alt="cart-widget" />
    </Link>
  )
}

export default CartWidget