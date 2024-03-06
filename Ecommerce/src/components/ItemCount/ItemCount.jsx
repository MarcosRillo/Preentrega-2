import { useState } from "react";

const ItemCount = ({ initial, stock }) => {
  const [cantidad, setCantidad] = useState(initial);

  const increment = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <h4>{cantidad}</h4>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default ItemCount;
