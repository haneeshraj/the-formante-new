export const slide = {
  initial: {
    y: "100%",
  },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.14, 0.07, 0.98],
      delay: 0.5 + i * 0.12,
    },
  }),
};

export const scale = {
  initial: {
    scale: 0,
  },
  animate: (i: number) => ({
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.14, 0.07, 0.98],
      delay: 0.5 + i * 0.12,
    },
  }),
};
