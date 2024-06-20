module.exports = function (x, fn = (x) => x) {
  console.log(fn(x), 111);
  return x;
};
