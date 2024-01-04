export const slide = {
  initial: {
    y: "110%",
  },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.42, 0.02, 0, 0.92],
      delay: 0.2 + i * 0.1,
    },
  }),
};
