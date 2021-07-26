const { is } = require("./isArray");
function aesComparator(a, b) {
  return a - b;
}
function desComparator(a, b) {
  return b - a;
}
let m = "des",
  n = "aes";
const isSortArray = (current) => {
  if (!is(current))
    return new TypeError("Expected Array, got " + typeof current);
  for (let i = 1; i < current.length; i++) {
    if (aesComparator(current[i - 1], current[i]) > 0) {
      // return false
      m = "";
      break;
    }
  }
  for (let i = 1; i < current.length; i++) {
    if (desComparator(current[i - 1], current[i]) > 0) {
      // return false
      n = "";
      break;
    }
  }
  if (m || n) return true;
  return false;
};

// export default isSortArray
module.exports = { isSortArray };
