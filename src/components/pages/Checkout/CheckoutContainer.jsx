import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export const CheckoutContainer = () => {
  const { getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return <Checkout totalPrice={totalPrice} />;
};
