import { Link } from "react-router-dom";

export const Cart = ({ cart, totalPrice, clearCart, removeById }) => {
  return (
    <div className="min-h-screen  mt-28 md:px-32 px-10">
      {cart.length === 0 && (
        <div className="flex flex-col justify-center items-center space-y-5 mt-10">
          <h1 className=" text-5xl font-semibold text-center">
            Your cart its empty
          </h1>
          <Link
            to="/"
            className="w-[50%] h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 flex justify-center items-center"
          >
            Continue shopping
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <>
          <div className="flex flex-col justify-center items-center space-y-2 border-b border-black pb-10">
            <h1 className=" text-5xl font-semibold text-center">
              Your total is {totalPrice} USD
            </h1>
            <h2 className="text-lg">Free delivery and free returns.</h2>
            <button className="h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 md:w-[50%] w-full">
              Check Out
            </button>
          </div>
          {/* items */}
          {cart.map((product, key) => {
            return (
              <div
                key={key}
                className="flex  justify-around  flex-col md:flex-row border-b border-black py-10 space-y-5 md:space-y-0"
              >
                <div className="flex space-x-4">
                  <img src={product.img} alt={product.model} className="w-20" />
                  <div className="flex flex-col space-y-1 justify-center">
                    <span className="text-2xl font-bold">
                      {product.quantity} | {product.model}
                    </span>
                    <span className="text-xl font-semibold">
                      {product.spec.size}
                    </span>
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
          })}
          {/* total */}
          <div className="flex justify-around  md:mx-32 pt-10 pb-5 border-b border-neutral-300">
            <div className="flex flex-col space-y-2">
              <span className="text-lg">Subtotal</span>
              <span className="text-lg">Shipping</span>
            </div>
            <div className="flex flex-col space-y-2">
              {/* SUBTOTAL */}
              <span className="text-lg">{totalPrice} USD</span>
              <span className="text-lg text-end">FREE</span>
            </div>
          </div>
          <div className="flex justify-around items-center md:px-32 pt-5 pb-10 border-b border-black">
            <div>
              <span className="text-2xl font-semibold">Total</span>
            </div>
            <div>
              {/* TOTAL */}
              <span className="text-2xl font-semibold">{totalPrice} USD</span>
            </div>
          </div>
          <div className="flex flex-col space-y-5  items-end py-10 md:mx-32">
            <button className="md:w-[30%] h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500">
              Check Out
            </button>
            <button
              className="md:w-[30%] h-10 bg-red-600 rounded-lg text-white hover:bg-red-500"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};
