import Item from "../Item/Item"

const ItemList = ({products}) => {
  return (
    <div className="cards">
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList