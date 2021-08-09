module.exports = (val) => {
  return val === null
    ? "Null"
    : val === undefined
    ? "Undefined"
    : Object.prototype.toString.call(val).slice(8, -1);
};
