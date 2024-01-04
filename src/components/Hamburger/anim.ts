export const scale = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0, 0, 1],
      delay: 0.5,
    },
  },
};

export const lineAnim = {
  initial: { transform: "scaleX(0)", transformOrigin: "left" },
  animate: {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },
  exit: { transform: "scaleX(0)", transformOrigin: "right" },
};

export const cross = {
  initial: (i: number) => ({
    transform: `translate(-50%, -50%) rotate(${
      i === 1 ? "45deg" : "-45deg"
    }) scaleX(0)`,
  }),

  animate: (i: number) => ({
    transform: `translate(-50%, -50%) rotate(${
      i === 1 ? "45deg" : "-45deg"
    }) scaleX(1)`,
    transition: { duration: 0.3, delay: 0.55 },
  }),

  exit: (i: number) => ({
    transform: `translate(-50%, -50%) rotate(${
      i === 1 ? "45deg" : "-45deg"
    }) scaleX(0)`,
  }),
};
