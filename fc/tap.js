module.exports = function (x, fn = (x) => x) {
  console.log(fn(x));
  return x;
};
