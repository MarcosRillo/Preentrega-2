import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, img, category, description, price, stock}) => {
  return (
    <article className="index__section">
        <header >
            <h3>{name}</h3>
        </header>
        <picture>
            <img src={img} alt={name} />
        </picture>
        <section>
            <p>
                Categoria: {category}
            </p>
            <p>
                Descripcion: {description}
            </p>
            <p>
                Precio: ${price}
            </p>
        </section>
        <footer>
            <ItemCount initial={1} stock={stock} />
        </footer>
    </article>
  )
}

export default ItemDetail