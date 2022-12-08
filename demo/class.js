/*
 * @Author: niupengzhi
 * @Date: 2022-12-08 09:03:14
 * @LastEditTime: 2022-12-08 09:04:22
 * @Description: 
 */
class Foo{
    static name = 'niu'
    #age = 18
    arr =[1,2,3,4]
    say() {
        console.log(this.#age)
        this.#age = 20
        console.log(this.#age)
        console.log(Foo.name)
        Foo.name = 'niupeng'
        console.log(Foo.name)
        console.log(this.arr)
    }
}

new Foo().say()