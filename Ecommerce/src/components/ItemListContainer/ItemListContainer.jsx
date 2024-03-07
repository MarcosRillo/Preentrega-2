import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect( () => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(err => {
        console.log(err)
      })
  },[categoryId])
  return (
    <>
        <h1>{greeting}</h1>
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer