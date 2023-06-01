import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="card cursor-pointer ">
      <img
        src={product.img}
        alt={product.title}
        className="h-72 w-auto p-2 flex m-auto"
      />
      <div className="productInfo flex flex-row overflow-hidden">
        <div className="flex flex-col">
          <span className="font-bold whitespace-nowrap">{product.title}</span>
          <span>{product.space}</span>
          <span className="text-sm">{product.screen}</span>
        </div>
        <span className="ml-auto mt-auto font-semibold">
          {product.price}USD
        </span>
      </div>
    </div>
  );
};
