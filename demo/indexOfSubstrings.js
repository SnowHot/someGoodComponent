const tap = require("../fc/tap");
const indexOfSubstrings = function* (str, search) {
  let i = 0;
  while (true) {
    const r = str.indexOf(search, i);
    if (r !== -1) {
      yield r;
      i++;
    } else return;
  }
};

tap(indexOfSubstrings("123331223112233", "12").next());
