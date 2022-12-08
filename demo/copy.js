/*
 * @Author: niupengzhi
 * @Date: 2022-11-02 14:09:32
 * @LastEditTime: 2022-11-02 16:18:21
 * @Description: 
 */

function copy(obj, hash = new WeakMap()) {
    if (obj === null) {
        return obj
    }
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (typeof obj !== 'object') return obj
    if (hash.get(obj)) return hash.get(obj)
    let cloneobj = new obj.constructor()
    hash.set(obj, cloneobj)
    for (let i in obj) {
        cloneobj[i] = copy(obj[i], hash)
    }
    return copy
}

class emitEvent {
    constructor() {
        this.subs = {}
    }
    on(key, fn) {
        if (this.subs[key]) {
            this.subs[key].push(fn)
        } else {
            this.subs[key] = [fn]
        }
    }
    emit(key, arg) {
        if (this.subs[key]) {
            this.subs[key].forEach(element => {
                element.apply(this, arg)
            })
        }
    }
    remove(key, fn) {
        if (!this.subs[key]) return
        Reflect.deleteProperty(this.subs, key)
    }
}

const F = function () { }
const a = new F()
console.log(F.__proto__ === Function.prototype)
console.log(a.__proto__ === F.prototype)
console.log(F.prototype.__proto__ === Object.prototype)