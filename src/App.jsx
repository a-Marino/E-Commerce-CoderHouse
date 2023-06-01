import { ItemListContainerContainer } from "./components/pages/ItemListContainer/ItemListContainerContainer";
import { NavBar } from "./components/layout/NavBar/NavBar";
import { Footer } from "./components/layout/Footer/Footer";
import { ProductDetailsContainer } from "./components/pages/ProductDetails/ProductDetailsContainer";

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainerContainer /> */}
      <ProductDetailsContainer />
      <Footer />
    </>
  );
}

export default App;
