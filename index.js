/*
 * @Author: niupengzhi
 * @Date: 2021-07-26 15:49:25
 * @LastEditTime: 2022-12-08 09:24:19
 * @Description: 
 */
import { isSortArray } from "./fc/array/isSortArray"
import { flat } from "./fc/array/flat"
import { is } from "./fc/array/isArray"
import clone from "./fc/object/clone"
import tap from "./fc/tap"
import cloneRegExp from "./fc/cloneRegExp"
const o = { r: 1, t: 2 };
var obj = { a: { a: 1 }, b: o, c: [], d: new Date(), e: /ad/i, f: o };

// module.exports = { isSortArray, flat, is, tap, clone, cloneRegExp };
export default { isSortArray, flat, is, tap, clone, cloneRegExp };
