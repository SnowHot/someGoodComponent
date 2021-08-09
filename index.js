const { isSortArray } = require("./fc/array/isSortArray");
const { flat } = require("./fc/array/flat");
const { is } = require("./fc/array/isArray");
const clone = require("./fc/object/clone");
const tap = require("./fc/tap");
const cloneRegExp = require("./fc/cloneRegExp");
const o = { r: 1, t: 2 };
var obj = { a: { a: 1 }, b: o, c: [], d: new Date(), e: /ad/i, f: o };

module.exports = { isSortArray, flat, is, tap, clone, cloneRegExp };
