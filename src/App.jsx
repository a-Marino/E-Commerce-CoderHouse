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
          <Route
            path="*"
            element={
              <div className="mt-32 text-center text-8xl">
                Error <span className="text-red-600 font-bold">404</span>
              </div>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
