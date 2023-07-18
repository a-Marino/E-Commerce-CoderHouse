import { useState } from "react";
import { motion } from "framer-motion";
import { NewItemAlert } from "../Alert/Alert";
import { AnimatePresence } from "framer-motion";

export const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const isDisabledIncrement = !stock || count >= stock;
  const isDisabledDecrement = !stock || count <= 1;

  const handleAlert = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5 space-y-3">
        <div className="flex space-x-5">
          <motion.button
            whileHover={isDisabledDecrement ? { scale: 1 } : { scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
            onClick={decrement}
            className="bg-blue-600 px-4 rounded-lg enabled:hover:bg-blue-500 disabled:opacity-60 disabled:cursor-default text-white"
            disabled={isDisabledDecrement}
          >
            -
          </motion.button>
          <span>{count}</span>
          <motion.button
            whileHover={isDisabledIncrement ? { scale: 1 } : { scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
            onClick={increment}
            className="bg-blue-600 px-4 rounded-lg enabled:hover:bg-blue-500 disabled:opacity-60 disabled:cursor-default text-white"
            disabled={isDisabledIncrement}
          >
            +
          </motion.button>
        </div>
        {stock && (
          <span className="text-sm">
            Stock: <span className="font-bold">{stock}</span>
          </span>
        )}
        <AnimatePresence>{isAlertVisible && <NewItemAlert />}</AnimatePresence>
        <motion.button
          whileHover={!stock ? { scale: 1 } : { scale: 1.03 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
          className="w-full h-10 bg-blue-600 rounded-lg text-white enabled:hover:bg-blue-500 disabled:opacity-60 disabled:cursor-default"
          disabled={!stock}
          onClick={() => {
            onAdd(count), handleAlert();
          }}
        >
          Add to cart
        </motion.button>
      </div>
    </>
  );
};
