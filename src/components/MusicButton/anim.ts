export const scale = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.84, 0.03, 0.29, 1],
    },
  },
};

export const up = {
  initial: {
    y: "2rem",
    opacity: 0,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.55, 0, 0.15, 1.43],
      delay: 0.2 + i * 0.2,
    },
  }),
};
