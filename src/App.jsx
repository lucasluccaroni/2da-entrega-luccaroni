ItemDetailContainer
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Todos los productos" />
      <ItemDetailContainer />
    </>
  )
}
 
export default App
