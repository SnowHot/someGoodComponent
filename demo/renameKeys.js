const tap = require("../fc/tap");
const renamekeys = (keymap, obj) =>
  Object.keys(obj).reduce(
    (calc, current) => ({
      ...calc,
      ...{ [keymap[current] || current]: obj[current] },
    }),
    {}
  );

const obj = { name: "niu", age: 1, height: 180 };

tap(renamekeys({ name: "firstName", age: "realAge" }, obj));
