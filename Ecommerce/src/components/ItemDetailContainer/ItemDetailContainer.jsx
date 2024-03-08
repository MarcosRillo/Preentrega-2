import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams() 

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [itemId])
  return (
    <div className="base-content">
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer