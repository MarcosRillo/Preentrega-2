import { useEffect, useState } from "react"
// import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams() 

    useEffect(() => {
        getDoc(doc(db, 'platos', itemId))
        .then((response) => {
            const plato = {id: response.id, ...response.data()}
            setProduct(plato)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])
  return (
    <div className="base-content">
        {loading ? <h1>Cargando... </h1> : <ItemDetail {...product}/>}
    </div>
  )
}

export default ItemDetailContainer

// getProductsById(itemId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })