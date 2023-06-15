import { useContext } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  const totalPrice = cart
    .map((product) => product.quantity * product.spec.price)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Cart
      cart={cart}
      totalPrice={totalPrice}
      clearCart={clearCart}
      removeById={removeById}
    />
  );
};
