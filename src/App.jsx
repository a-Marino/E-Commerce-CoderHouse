import { ItemListContainerContainer } from "./components/pages/ItemListContainer/ItemListContainerContainer";
import { Layout } from "./components/layout/Layout";
import { ProductDetailsContainer } from "./components/pages/ProductDetails/ProductDetailsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
