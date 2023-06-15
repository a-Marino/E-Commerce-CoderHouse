import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./CartWidget.css";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart">
      <span className="text-lg font-semibold">Cart</span>
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.p
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="cartCounter"
          >
            {cart.length}
          </motion.p>
        )}
      </AnimatePresence>
    </Link>
  );
};
