import { useContext, useState } from "react";
import { Cart } from "./Cart";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const totalPrice = getTotalPrice();

  const handleAlert = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  return (
    <Cart
      cart={cart}
      totalPrice={totalPrice}
      clearCart={clearCart}
      removeById={removeById}
      handleAlert={handleAlert}
      isAlertVisible={isAlertVisible}
    />
  );
};
