import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./CartWidget.css";

export const CartWidget = () => {
  const cartItems = 1;

  return (
    <Link to="/cart" className="cart">
      <span className="text-lg font-semibold">Cart</span>
      <AnimatePresence>
        {cartItems > 0 && (
          <motion.p
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="cartCounter"
          >
            {cartItems}
          </motion.p>
        )}
      </AnimatePresence>
    </Link>
  );
};
