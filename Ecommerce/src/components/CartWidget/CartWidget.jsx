import cart from './assets/cart.svg'

const CartWidget = () => {
  return (
    <div className='navbar-brand'>
        <img src={cart} alt="icon-carrito" />
        0
    </div>
  )
}

export default CartWidget