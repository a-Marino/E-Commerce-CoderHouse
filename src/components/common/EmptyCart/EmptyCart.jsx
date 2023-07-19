import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col  items-center space-y-5 mt-28 min-h-screen">
      <h1 className=" text-5xl font-semibold text-center">Your cart its empty</h1>
      <Link
        to="/"
        className="md:w-[50%] w-full h-10 bg-blue-600 rounded-lg text-white hover:bg-blue-500 flex justify-center items-center"
      >
        Continue shopping
      </Link>
    </div>
  );
};
