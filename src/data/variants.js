export const headerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.8 },
  },
};

export const mainVariants = {
  initial: {
    opacity: 0,
    y: '10vh',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.8 },
  },
};

export const snippetVariants = {
  unseen: {
    opacity: 0,
    x: '1vw',
  },
  seen: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.8 },
  },
};

export const projTitleVariants = {
  unseen: {
    opacity: 0,
    x: '-1vw',
  },
  seen: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const projVariants = {
  unseen: {
    opacity: 0,
    x: '-1vw',
  },
  seen: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.8 },
  },
};

export const toolsVariants = {
  unseen: {
    opacity: 0,
    y: '1vh',
  },
  seen: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.8 },
  },
};
