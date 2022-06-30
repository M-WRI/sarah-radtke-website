export const animation = {
  lineHover: {
    width: 25,
    transition: { bounce: 0, ease: "easeOut", duration: 0.3 },
  },
  lineOff: {
    width: 0,
    transition: { bounce: 0, ease: "easeOut", duration: 0.3 },
  },
  linkActive: {
    color: "#cbbb9f",
  },
  linkOff: {
    color: "#dfd6c5",
  },
  image: {
    y: "0%",
    transition: {
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 1,
    },
  },
  contentBox: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.3,
      ease: [0.7, 0.135, 0.235, 0.99],
      duration: 0.6,
    },
  },
};
