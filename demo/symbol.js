/*
数据结构Symbol，总结
详情：https://es6.ruanyifeng.com/#docs/symbol
*/
const f = require("../fc/tap");
let a = {};
// 1. 创建symbol的时候添加描述
const sym = Symbol("foo");

f(sym.description === "foo");

// 2.作为属性名

const mysymbol = Symbol();
const b = Symbol();
const c = {
  [b](x) {
    f(x);
  },
};
a[mysymbol] = "hello";

f(a[mysymbol]);

//3. 定义常量

const log = {
  levels: {
    DEBUG: Symbol("debug"),
    INFO: Symbol("info"),
    WARN: Symbol("warn"),
  },
};

f(log.levels.DEBUG);

//4.属性名遍历

const obj = { name: 1 };
const d = Symbol();
const e = Symbol();

obj[d] = "hello";
obj[e] = "world";

const objSymbol = Object.getOwnPropertySymbols(obj);

f(objSymbol);

f(Reflect.ownKeys(obj));

//5. 使用同样的Symbol Symbol.for()

const a1 = Symbol.for("foo");
const a2 = Symbol.for("foo");

f(a1 === a2);

// 6.内置的symbol值
class Myclass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}
f([] instanceof new Myclass());

const myIterable = {};

myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

f([...myIterable]);

