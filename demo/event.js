function EventEmitter () {
    this.middle = {}
    this.$on = (name, fn) => {
        const flag = Reflect.has(this.middle,name)
        if (!flag) {
            this.middle[name] = [fn]
        } else {
            this.middle[name].push(fn)
        }
        
    }
    this.$emit = (name, ...arg) => {
        this.middle[name].forEach(element => {
            element.apply(null, arg)
        });
    }
}

const a = new EventEmitter()

a.$on('add', (a, b) => {
    console.log(a+b)
})

a.$on('add', (a, b) => {
    console.log(a - b )
})

a.$emit('add', 5, 3)