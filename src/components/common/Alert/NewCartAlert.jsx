import { motion } from "framer-motion";

export const NewCartAlert = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      className="text-center py-2"
    >
      <div
        className="p-2 bg-blue-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          New
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          Product added to de cart
        </span>
      </div>
    </motion.div>
  );
};
