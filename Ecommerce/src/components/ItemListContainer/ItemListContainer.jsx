import { useEffect, useState } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "platos"), where("category", "==", categoryId))
      : collection(db, "platos");
    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  
  if(loading) {
    return <h1>Cargando platos...</h1>
  }
  
  return (
    <div className="container">
      <h3>{greeting}</h3>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

// const asyncFunc = categoryId ? getProductsByCategory : getProducts
// asyncFunc(categoryId)
//   .then(response => {
//     setProducts(response)
//   })
//   .catch(err => {
//     console.log(err)
//   })
