import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola, aqui van a estar los productos de mi E-Commerce" />
    </>
  );
}

export default App;
