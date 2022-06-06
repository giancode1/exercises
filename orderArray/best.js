// const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);  //una sola linea

const flip = (d, a) => {
  return a.sort((x, y) => (d === "R" ? x - y : y - x));
};

module.exports = flip;