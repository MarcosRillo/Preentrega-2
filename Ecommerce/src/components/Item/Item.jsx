import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
  return (
    <article className="card">
        <header className="card-title">
            <h5>{name}</h5>
        </header>
        <picture>
            <img src={img} alt={name} className="card-img"/>
        </picture>
        <section className="card-content">
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
        </section>
        <footer>
            <Link to={`/item/${id}`} className="link">Ver detalle</Link>
        </footer>

    </article>
  )
}

export default Item