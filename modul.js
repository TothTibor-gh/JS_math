const contains = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return true;
    }
  }
  return false;
};

const oddMult = (array) => {
  let mult = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      mult *= array[i];
    }
  }
  return mult;
};
