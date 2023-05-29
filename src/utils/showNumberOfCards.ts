export const showNumberOfCards = () => {
  if (document.documentElement.scrollWidth < 639) {
    return 1;
  } else if (document.documentElement.scrollWidth < 768) {
    return 2;
  } else {
    return 3;
  }
};
