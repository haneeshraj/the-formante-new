export const wordAnim = {
  initial: {
    y: "100%",
  },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.22, 0.05, 0.96],
      delay: 0.1 + i * 0.05,
    },
  }),
};
