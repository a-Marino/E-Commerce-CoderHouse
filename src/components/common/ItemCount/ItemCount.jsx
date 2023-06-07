import { useState } from "react";

export const ItemCount = ({ stock, specSelectedId, onAdd }) => {
  const [count, setCount] = useState(1);

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
    <div className="flex flex-col justify-center items-center mt-5 space-y-3">
      <div className="flex space-x-5">
        <button
          onClick={decrement}
          className="bg-blue-600 px-4 rounded-full enabled:hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!stock}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={increment}
          className="bg-blue-600 px-4 rounded-full enabled:hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!stock}
        >
          +
        </button>
      </div>
      {stock && <span className="text-sm">Stock: {stock}</span>}
      <button
        className="w-full h-10 bg-blue-600 rounded-full text-white enabled:hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={!stock}
        onClick={() => onAdd(count, specSelectedId)}
      >
        Add to cart
      </button>
    </div>
  );
};
