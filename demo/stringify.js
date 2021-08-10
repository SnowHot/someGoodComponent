const tap = require("../fc/tap");
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const target = {
  id: 1234,
  location: new Point(10, 20),
  name: "niu",
};
tap(
  JSON.stringify(target, (key, value) => {
    if (key === "id") return undefined;
    if (value instanceof Point) return [value.x, value.y];
    return value;
  })
);
