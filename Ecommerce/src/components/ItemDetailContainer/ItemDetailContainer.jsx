import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('3')
            .then(response => {
                setProduct(response)
            })
            .catch(err => {
                console.log(err)
            })
    })
  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer