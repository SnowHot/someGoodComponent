
let handler = {
    get (target, name) {
        return 'hello'
    },
    apply(target, thisBinding, args) {
        return target.apply(thisBinding,[...args])
    },
    construct(target, args) {
        const arg = [...args]
        return {x: arg[0], y: arg[1]}
    }
}
let fproxy = new Proxy(function(x,y){
    return x+y
}, handler)


console.log(new fproxy(1, 2))