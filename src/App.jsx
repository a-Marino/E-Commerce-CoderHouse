import { Layout } from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routesMenu } from "./routes/routesMenu";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routesMenu.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
