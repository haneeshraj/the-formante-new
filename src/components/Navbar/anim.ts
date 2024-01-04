export const logoAnim: { initial: object; animate: object } = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,

    transition: {
      duration: 0.5,
      ease: [0.25, 0.14, 0.07, 0.98],
    },
  },
};

export const navItemsAnim: {
  initial: object;
  animate: object | (() => object);
} = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 1,
      ease: [0.25, 0.14, 0.07, 0.98],
    },
  }),
};
