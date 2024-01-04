export const letterAnim = {
  initial: {
    y: "100%",
  },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.4, 0, 0, 1],
      delay: 0.3 + i * 0.12,
    },
  }),
};
