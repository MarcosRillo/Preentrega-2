import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

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
    <div>
        <ItemListContainer />
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer