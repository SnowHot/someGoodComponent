module.exports = function (fn) {
  return function fx() {
    if (arguments.length === 0) {
      return fx;
    } else {
      return fn.apply(this, arguments);
    }
  };
};
