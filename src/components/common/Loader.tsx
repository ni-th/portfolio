import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed top-0 inset-0 backdrop-blur flex justify-center items-center h-full">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-xl"
      >
        Loading . . .
      </motion.h2>
    </div>
  );
};

export default Loader;
