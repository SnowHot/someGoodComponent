const a = [0, 1, 2, 3, 4];
for (var i = 0; i < a.length; i++) {
  if (a[i] === 2) {
    return // 0, 1 stop the loop
    break; // 0, 1 stop the loop
    continue; // 0,1,3,4 跳过当前循环
  }
  console.log(a[i]);
}