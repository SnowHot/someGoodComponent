// *特别注意： 逗号（,）操作符在 JavaScript 中所有的操作符里是最低的优先顺序
console.log((5, 6)); // 6

for (let i = 0, j = 0; i < 5; i++, j++, j++) {
  console.log(`i=${i},j=${j}`);
}
