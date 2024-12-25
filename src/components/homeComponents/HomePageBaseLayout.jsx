"use client";
import {
  createStaggerContainer,
  createStaggerVariant,
  staggerAnimVar,
} from "@/utils/animationVariants";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const HomePageBaseLayout = () => {
  const staggerContainer = createStaggerContainer(0.4);
  const staggerItem = createStaggerVariant(0.4);
  return (
    <div className="container mx-auto flex flex-col">
      <div className="p-4 md:p-8">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerAnimVar}
          >
            <h1 className="text-center text-4xl tracking-tighter font-extrabold md:text-5xl mt-8">
              AuthSync
            </h1>
            <h3 className="my-6 text-center">
              Simplifying Form Building with Powerful Libraries
            </h3>
          </motion.div>
        </motion.div>
        <div className="flex flex-col space-y-6">
          <p>
            <b>Welcome to Authsync!</b> I specialize in making form building
            easier and more efficient by leveraging some of the most powerful
            libraries in the development world. Whether you're building forms
            with Auth.js, Formik, or optimizing data fetching with SWR, I
            provide clear demos, tutorials, and best practices to streamline
            your workflow.
          </p>
          <h4 className="font-semibold text-3xl border-b border-border">
            Features
          </h4>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col space-y-2"
          >
            <motion.p variants={staggerItem}>
              <b>• Auth.js: </b> Simplify authentication flows with
              modern,easy-to-integrate hooks.
            </motion.p>
            <motion.p variants={staggerItem}>
              <b>• Formik: </b> Create complex forms with minimal code and
              robust validation features.
            </motion.p>
            <motion.p variants={staggerItem}>
              <b>• SWR: </b> Fetch and manage data effortlessly to enhance your
              form handling.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-center space-x-2">
        <span>Made with</span> <FaHeart size={24} color="red" />
        <span>@ancode</span>
      </div>
    </div>
  );
};

export default HomePageBaseLayout;
