export const slide = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.42, 0.02, 0, 0.92],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 1.2,
      ease: [0.8, 0, 0.12, 0.77],
    },
  },
};

export const up = {
  initial: {
    y: "100%",
  },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.42, 0.02, 0, 0.92],
      delay: 0.2 + i * 0.2,
    },
  }),
};
