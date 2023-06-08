import { Link } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <Link to="/cart" className="cart">
      <span className="text-lg font-semibold">Cart</span>
      <p className="cartCounter">1</p>
    </Link>
  );
};
