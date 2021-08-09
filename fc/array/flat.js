const {is} = require('./isArray')
const a = function(e, arr) {
    let len = e.length
    for (let i=0;i<len;i++) {
        is(e[i])? a(e[i], arr): arr.push(e[i])
    }
    return arr
}
const flat = (e) => {
    if (!is(e)) return new Error('expectd params type Array')
    let arr = []
    return a(e, arr)
}
module.exports = {flat}