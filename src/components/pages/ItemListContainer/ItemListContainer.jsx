import { ProductCard } from "../../common/ProductCard/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

export const ItemListContainer = ({ products, categoryName }) => {
  return (
    <div className="min-h-screen mt-28">
      <h1 className="text-center text-5xl font-bold mb-10">
        {categoryName == undefined
          ? "All Products"
          : categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        layout
        className="cardContainer flex flex-wrap justify-center gap-3 p-2"
      >
        <AnimatePresence>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
