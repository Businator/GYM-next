export const sortingByTime = (array: string[]) => {
  return array.sort((a, b) => {
    let aTime = parseFloat(a);
    let bTime = parseFloat(b);

    if (a.includes("PM")) {
      aTime += 12;
    }
    if (b.includes("PM")) {
      bTime += 12;
    }

    return aTime - bTime;
  });
};
