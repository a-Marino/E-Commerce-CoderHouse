import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { motion } from "framer-motion";

export const ProductCard = ({ product }) => {
  const [isStockAvailable, setIsStockAvailable] = useState(false);

  useEffect(() => {
    const totalStock = product.spec.reduce((acc, element) => {
      return acc + element.stock;
    }, 0);

    if (totalStock > 0) {
      setIsStockAvailable(true);
    }
  }, [product]);

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
        className="card cursor-pointer relative"
      >
        {!isStockAvailable && (
          <span className="absolute bg-red-600/80 backdrop-blur-sm rounded-full text-sm px-2 py-1 m-2 z-[1] text-white font-semibold">
            Out of Stock
          </span>
        )}
        <img
          src={product.img}
          alt={product.title}
          className="h-72 w-auto p-2 flex m-auto"
        />
        <div className="productInfo overflow-hidden py-1 px-3 bg-neutral-200">
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
