const type = require("../type");
const cloneRegExp = require("../cloneRegExp");

const f = (value, refFrom = [], refTo = []) => {
  const copy = (copiedValue) => {
    var len = refFrom.length;
    var idx = 0;

    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }

      idx += 1;
    }

    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (let i in value) {
      copiedValue[i] = f(value[i], refFrom, refTo);
    }
    return copiedValue;
  };
  switch (type(value)) {
    case "Object":
      return copy({});
    case "Array":
      return copy([]);
    case "Date":
      return new Date();
    case "RegExp":
      return cloneRegExp(value);
    default:
      return value;
  }
};

module.exports = f;
