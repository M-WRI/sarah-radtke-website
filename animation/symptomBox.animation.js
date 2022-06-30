export const animation = {
  bg: {
    y: 0,
    transition: {
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 1,
    },
  },
  head: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 0.5,
    },
  },
  text: {
    opacity: 1,
    transition: {
      delay: 1.1,
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 0.5,
    },
  },
  // item: (i) => ({
  //   opacity: 1,
  //   transition: {
  //     delay: !text ? 1.1 + i * 0.1 : 1.3 + i * 0.1,
  //   },
  // }),
};
