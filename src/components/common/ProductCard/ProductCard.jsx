import { Link } from "react-router-dom";
import "./ProductCard.css";
import { motion } from "framer-motion";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        layout
        key={product.id}
        className="card cursor-pointer "
      >
        <img
          src={product.img}
          alt={product.title}
          className="h-72 w-auto p-2 flex m-auto"
        />
        <div className="productInfo overflow-hidden py-1 px-3">
          <div className="flex flex-col">
            <span className="font-bold whitespace-nowrap text-xl">
              {product.model}
            </span>
            <span className="space-x-2">{product.spec[0].size}*</span>
            <span>{product.screen}</span>
            <span className="font-semibold self-end">
              <span className="text-sm font-normal mr-2">from</span>
              {product.spec[0].price}USD
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
