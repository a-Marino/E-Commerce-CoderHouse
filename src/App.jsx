import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/NavBar/NavBar";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="All Products" />
      <Footer />
    </>
  );
}

export default App;
