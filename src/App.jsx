import { Layout } from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routesMenu } from "./routes/routesMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routesMenu.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
