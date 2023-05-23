import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola, aqui van a estar los productos de mi E-Commerce" />
      <Footer />
    </>
  );
}

export default App;
