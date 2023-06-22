import { Link } from "react-router-dom";
import { ProductCardCart } from "./ProductCardCart/ProductCardCart";

export const Cart = ({ cart, totalPrice, clearCart, removeById }) => {
  return (
    <div className="min-h-screen  mt-28 md:px-32 px-10">
      {cart.length > 0 ? (
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
              <ProductCardCart
                key={key}
                product={product}
                removeById={removeById}
              />
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
            <button className="md:w-[30%] w-[50%] h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500">
              Check Out
            </button>
            <button
              className="md:w-[30%] w-[50%] h-10 bg-red-600 rounded-lg text-white hover:bg-red-500"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-5 mt-10">
          <h1 className=" text-5xl font-semibold text-center">
            Your cart its empty
          </h1>
          <Link
            to="/"
            className="md:w-[50%] w-full h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 flex justify-center items-center"
          >
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
};
