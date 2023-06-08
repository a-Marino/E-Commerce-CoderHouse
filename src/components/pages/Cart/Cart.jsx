export const Cart = () => {
  return (
    <div className="min-h-full mt-28 md:px-32 px-10">
      <div className="flex flex-col justify-center items-center space-y-2 border-b border-black pb-10">
        <h1 className=" text-5xl font-semibold text-center">
          Your total is 800 USD
        </h1>
        <h2 className="text-lg">Free delivery and free returns.</h2>
      </div>
      {/* items */}
      <div className="flex justify-around  flex-col md:flex-row border-b border-black py-10 space-y-5 md:space-y-0">
        <div className="flex space-x-4">
          <img
            src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684897557/Apple%20Phones/compare_iphone13_mini_pink__dwss1czwg66a_large_2x_j21lx7.jpg"
            alt="item1"
            className="w-20"
          />
          <div className="flex flex-col space-y-1 justify-center">
            <span className="text-2xl font-bold">1 iPhone 13 mini</span>
            <span className="text-xl font-semibold">128GB</span>
            <span className="text-xl">Pink</span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 justify-center">
          <span className="text-3xl font-semibold text-center">800 USD</span>
          <button className="h-10 bg-blue-600 rounded-full text-white hover:bg-blue-500">
            Remove
          </button>
        </div>
      </div>
      {/* total */}
      <div className="flex justify-around  md:mx-32 pt-10 pb-5 border-b border-neutral-300">
        <div className="flex flex-col space-y-2">
          <span className="text-lg">Subtotal</span>
          <span className="text-lg">Shipping</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-lg">800 USD</span>
          <span className="text-lg">FREE</span>
        </div>
      </div>
      <div className="flex justify-around items-center md:px-32 pt-5 pb-10 border-b border-black">
        <div>
          <span className="text-2xl font-semibold">Total</span>
        </div>
        <div>
          <span className="text-2xl font-semibold">800 USD</span>
        </div>
      </div>
      <div className="flex justify-center items-center py-10">
        <button className="w-full h-10 bg-blue-600 rounded-full text-white hover:bg-blue-500">
          Check Out
        </button>
      </div>
    </div>
  );
};
