import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
            <h3 className="link">Home</h3>
            </Link>
            <div className="navbar-links">
                <NavLink to={`/category/entradas`} className={'link'}>Entradas</NavLink>
                <NavLink to={`/category/principales`} className={'link'}>Principales</NavLink>
                <NavLink to={`/category/bebidas`} className={'link'}>Bebidas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar