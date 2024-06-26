import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    setQuantityAdded(cantidad);

    const item = {
      id,
      name,
      price,
      img
    };

    addItem(item, cantidad);
  };
  return (
    <article className="index__section">
      <header>
        <h3>{name}</h3>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>Categoria: {category}</p>
        <p>Descripcion: {description}</p>
        <p>Precio: ${price}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart">Terminar Compra</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
        <div>
          <Link to="/">Menu</Link>
        </div>
      </footer>
    </article>
  );
};

export default ItemDetail;
