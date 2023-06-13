import { CartContainer } from "../components/pages/Cart/CartContainer";
import { ItemListContainerContainer } from "../components/pages/ItemListContainer/ItemListContainerContainer";
import { ProductDetailsContainer } from "../components/pages/ProductDetails/ProductDetailsContainer";

export const routesMenu = [
  {
    id: 1,
    path: "/",
    Element: ItemListContainerContainer,
  },
  {
    id: 2,
    path: "/category/:categoryName",
    Element: ItemListContainerContainer,
  },
  {
    id: 3,
    path: "/product/:id",
    Element: ProductDetailsContainer,
  },
  {
    id: 4,
    path: "/cart",
    Element: CartContainer,
  },
];
