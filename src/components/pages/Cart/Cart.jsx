import { Link } from "react-router-dom";
import { ProductCardCart } from "./ProductCardCart/ProductCardCart";
import { DeleteItemAlert } from "../../common/Alert/Alert";
import { AnimatePresence } from "framer-motion";
import { EmptyCart } from "../../common/EmptyCart/EmptyCart";

export const Cart = ({ cart, totalPrice, clearCart, removeById, handleAlert, isAlertVisible }) => {
  return (
    <div className="min-h-screen mt-10 md:px-32 px-10">
      {cart.length > 0 ? (
        <>
          <div className="flex flex-col justify-center items-center space-y-2 border-b border-black pb-10">
            <h1 className=" text-5xl font-semibold text-center">Your total is {totalPrice} USD</h1>
            <h2 className="text-lg">Free delivery and free returns.</h2>
            <Link
              to="/checkout"
              className="h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 md:w-[50%] w-full flex justify-center items-center"
            >
              Check Out
            </Link>
          </div>
          {/* items */}
          <AnimatePresence>{isAlertVisible && <DeleteItemAlert />}</AnimatePresence>
          {cart.map((product, key) => {
            return (
              <ProductCardCart
                key={key}
                product={product}
                removeById={removeById}
                handleAlert={handleAlert}
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
            <Link
              to="/checkout"
              className="md:w-[30%] w-[50%] h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 flex justify-center items-center"
            >
              Check Out
            </Link>
            <button
              className="md:w-[30%] w-[50%] h-10 bg-red-600 rounded-lg text-white hover:bg-red-500"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
