
const Item = ({name, img, price, stock}) => {
  return (
    <article>
        <header>
            <h2>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} />
        </picture>
        <section>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
        </section>
        <footer>
            <button>Ver Detalle</button>
        </footer>

    </article>
  )
}

export default Item