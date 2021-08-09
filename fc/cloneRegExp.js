module.exports = (pattern) => {
  const arr = [
    { a: "global", b: "g" },
    { a: "ignoreCase", b: "i" },
    { a: "multiline", b: "m" },
    { a: "sticky", b: "y" },
    { a: "unicode", b: "u" },
  ];
  let s = arr
    .filter((v) => pattern[v.a])
    .map((n) => n.b)
    .join("");
  return new RegExp(pattern.source, s);
};
