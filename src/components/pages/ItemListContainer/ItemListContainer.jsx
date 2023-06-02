import { ProductCard } from "../../common/ProductCard/ProductCard";

export const ItemListContainer = ({ products }) => {
  return (
    <div className="min-h-full mt-32">
      <h1 className="text-center text-5xl font-bold mb-5">All Products</h1>
      <div className="cardContainer flex flex-wrap justify-center gap-5 p-5">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
