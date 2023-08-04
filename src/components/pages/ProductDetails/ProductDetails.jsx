import "./ProductDetails.css";
import { ItemCount } from "../../common/ItemCount/ItemCount";
import { motion } from "framer-motion";

export const ProductDetails = ({
  product,
  onAdd,
  price,
  specStock,
  onSpecChange,
  isStockAvailable,
  specSelectedId,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-full min-w-screen  mb-20 p-10 flex md:flex-row md:justify-around md:space-y-0 space-y-10 flex-col"
    >
      {/* LEFT */}
      <div>
        <img src={product.img} alt={product.model} className="w-72" />
      </div>
      {/* RIGHT */}
      <div className="flex flex-col md:w-96">
        {/* model & price */}
        <div className="border-b border-black pb-3">
          <h1 className="text-4xl font-extrabold mb-1">{product.model}</h1>
          <div className="flex flex-row">
            <span className="text-2xl font-semibold">
              {price == undefined ? product.spec[0].price : price} USD
            </span>
            <div className="flex self-end items-center space-x-2 ml-auto pr-3">
              {product.colorCode != undefined && (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
                  className="w-5 h-5 border border-black rounded-full"
                  style={{ backgroundColor: product.colorCode }}
                ></motion.div>
              )}
              <span className=" text-lg">{product.color}</span>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="mt-5 pr-10 border-b border-black pb-5">
          <p>{product.description}</p>
        </div>
        {isStockAvailable ? (
          <>
            <div className="mt-5 pb-2 border-b border-black px-5 flex items-center justify-center space-x-4">
              {product.spec.map((spec) => {
                return (
                  <div className="button" key={spec.id}>
                    <input
                      type="radio"
                      id={spec.id}
                      value={spec.size}
                      name="productMemory"
                      disabled={!spec.stock}
                      onChange={onSpecChange}
                      data-stock={spec.stock}
                      data-price={spec.price}
                      defaultChecked={specSelectedId === spec.id}
                      required
                    />
                    <label className="btn btn-default" htmlFor={spec.size}>
                      {spec.size}
                    </label>
                  </div>
                );
              })}
            </div>
            <ItemCount stock={specStock} key={specStock} onAdd={onAdd} />
          </>
        ) : (
          <span className="mx-auto text-center text-white w-[50%]  mt-5 bg-red-600 rounded-full py-1">
            Out of Stock
          </span>
        )}
      </div>
    </motion.div>
  );
};
