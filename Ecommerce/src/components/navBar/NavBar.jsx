import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Entradas</button>
                <button>Principales</button>
                <button>Bebidas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar