import { useContext, useState } from "react";
import "./Checkout.css";
import { useForm } from 'react-hook-form'
import { CartContext } from "../context/CartContext";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('')
  const {cart, clearCart, getTotal} = useContext(CartContext)
  const {register, handleSubmit} = useForm();
  const ordenar = (data) => {
    const pedido = {
      cliente: data,
      products: cart,
      total: getTotal()
    }
    console.log(pedido)

    const pedidosRef = collection(db, 'pedidos')

    addDoc(pedidosRef, pedido)
    .then((doc) => {
      setPedidoId(doc.id)
      clearCart()
    })
  }
  if (pedidoId) {
    return (
      <div>
        <h2>Muchas gracias por tu compra...</h2>
        <p>Tu numero de pedido es: {pedidoId}</p>
      </div>
    )
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(ordenar)}>
        <label>nombre</label>
        <input type="text" {...register('nombre')}/>
        <label>email</label>
        <input type="email" {...register('email')}/>
        <label>numero</label>
        <input type="phone" {...register('telefono')}/>

      <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Checkout