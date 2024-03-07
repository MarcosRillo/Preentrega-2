import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
            <h3>Ecommerce</h3>
            </Link>
            <div>
                <NavLink to={`/category/entradas`}>Entradas</NavLink>
                <NavLink to={`/category/principales`}>Principales</NavLink>
                <NavLink to={`/category/bebidas`}>Bebidas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar