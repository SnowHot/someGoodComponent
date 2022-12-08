/*
 * @Author: niupengzhi
 * @Date: 2022-11-08 14:17:24
 * @LastEditTime: 2022-11-08 14:22:15
 * @Description: 
 */
function Fn(age) {
    this.age = age
}
Fn.prototype.say = function () {
    console.log(this.age)
}

function son(Fn, ...arg) {
    let obj = {}
    obj.__proto__ = Fn.prototype
    Fn.call(obj, ...arg)
    // console.log(obj)
    return obj
}
const sonObj = son(Fn, 18)
// console.log(sonObj)
sonObj.say()

