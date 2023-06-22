export const ProductCardCart = ({ product, removeById }) => {
  return (
    <div className="flex  justify-around  flex-col md:flex-row border-b border-black py-10 space-y-5 md:space-y-0">
      <div className="flex space-x-4">
        <img src={product.img} alt={product.model} className="w-20" />
        <div className="flex flex-col space-y-1 justify-center">
          <span className="text-2xl font-bold">
            {product.quantity} | {product.model}
          </span>
          <span className="text-xl font-semibold">{product.spec.size}</span>
          <span className="text-xl">{product.color}</span>
        </div>
      </div>
      <div className="md:w-[20%] flex flex-col space-y-3 justify-center">
        <span className="text-3xl font-semibold text-center">
          {product.quantity * product.spec.price} USD
        </span>
        <button
          className="h-10 bg-red-600 rounded-lg text-white hover:bg-red-500"
          onClick={() => removeById(product.id, product.spec.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
