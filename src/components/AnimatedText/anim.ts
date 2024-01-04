export const slide = {
  initial: {
    y: "110%",
    opacity: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.42, 0.02, 0, 0.92],
      delay: 0.1 + i * 0.05,
    },
  }),
};
