"use client";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const DataModal = ({ closeModal, modalData }) => {
  const entries = Object.entries(modalData);
  return (
    <div className="h-screen w-screen flex items-center justify-center fixed inset-0 bg-black bg-opacity-70 z-[999] p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white shadow-custom rounded-xl w-96 flex flex-col text-black"
      >
        <div className="flex justify-end p-2">
          <button
            className="h-8 w-8 rounded-full hover:bg-hover flex items-center justify-center"
            onClick={closeModal}
          >
            <IoIosClose size={24} />
          </button>
        </div>
        <div className="p-4">
          {entries.map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DataModal;
