//R = right  [1,5,7,9,10]
//L = left   [10,9,7,5,1]
const flip = (d, arr) => {
  if (d == "R") {
    arr.sort((a, b) => {
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
      return 1;
    });
  }
  if (d == "L") {
    arr.sort((a, b) => {
      if (a == b) {
        return 0;
      }
      if (a > b) {
        return -1;
      }
      return 1;
    });
  }

  return arr;
};

module.exports = flip;
