/*
 * @Author: niupengzhi
 * @Date: 2021-07-26 12:15:28
 * @LastEditTime: 2022-09-01 17:05:16
 * @Description: 
 */
function Multiply(a, b, c) {
    return a * b * c
}

function CurryMultiply(a) {
    return (b) => { return (c) => a * b * c }
}

// console.log(CurryMultiply(1)(2)(3))


let accMul = function (...arg) {
    let m = 0
    const arr = arg.map(v => v ? v.toString() : '0')
    arr.forEach(n => {
        try {
            m += n.split('.')[1].length
        } catch (e) { }
    })
    const all = arr.reduce((sum, current) => {
        return (current.replace('.', '') * sum.replace('.', '')).toString()
    }, '1')
    return all / Math.pow(10, m)
}
let accSum = function (...arg) {
    const arr = arg.map(v => v ? v.toString() : '0')
    const mathArr = arr.map(n => n.split('.')[1]?.length).filter(x => !!x)
    const max = mathArr.length ? Math.max.apply(null, mathArr) : 0
    const all = arr.reduce((sum, current) => {
        return current * Math.pow(10, max) + sum
    }, 0)
    console.log(all / Math.pow(10, max))
    return all / Math.pow(10, max)
}

accSum('0.1', 0, 0)
// accMul(0.1, undefined)