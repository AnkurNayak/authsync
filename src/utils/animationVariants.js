export const staggerAnimVar = {
  initial: {
    scale: 0.5,
    y: 50,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
  },

  transition: {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  },
};

// Stageer container
export const createStaggerContainer = (staggerAmount = 0.5) => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerAmount,
    },
  },
});

export const createStaggerVariant = (duration = 0.5) => ({
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration } },
});
