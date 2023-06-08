import { ItemListContainerContainer } from "./components/pages/ItemListContainer/ItemListContainerContainer";
import { Layout } from "./components/layout/Layout";
import { ProductDetailsContainer } from "./components/pages/ProductDetails/ProductDetailsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContainer } from "./components/pages/Cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainerContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainerContainer />}
          />
          <Route path="/product/:id" element={<ProductDetailsContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <NavBar />
<ItemListContainerContainer />
<ProductDetailsContainer />
<Footer /> */
}
