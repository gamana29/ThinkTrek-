import React, { useState } from "react";
import { motion } from "framer-motion";

const MattePage = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <motion.div 
        className="bg-gray-800 text-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-lg backdrop-blur-md bg-opacity-90"
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-3xl font-semibold text-gray-100 mb-4">Matte Finish Page</h1>
        <p className="text-gray-400 mb-6">
          This page has a smooth, matte finish design with a modern aesthetic.
        </p>
        <motion.button 
          className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold py-2 px-4 rounded-lg w-full transition shadow-md"
          whileTap={{ scale: 0.95 }}
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? "Clicked!" : "Click Me"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MattePage;
