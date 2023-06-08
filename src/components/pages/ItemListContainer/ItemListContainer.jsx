import { ProductCard } from "../../common/ProductCard/ProductCard";

export const ItemListContainer = ({ products, categoryName }) => {
  return (
    <div className="min-h-full mt-28">
      <h1 className="text-center text-5xl font-bold mb-5">
        {categoryName == undefined
          ? "All Products"
          : categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>
      <div className="cardContainer flex flex-wrap justify-center gap-3 p-2">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
