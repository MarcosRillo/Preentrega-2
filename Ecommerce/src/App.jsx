import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"La Caballeriza"}/>
      <ItemCount initial={1} stock={10}/>
    </>
  )
}

export default App
