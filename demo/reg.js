let re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
// console.log(re.exec('123-132-3456'))
let email = /^[a-z\d.-_]+@[a-z\d._-]+\.\w+/
    // console.log(email.test('947_4324@qq.com'))
let phone = /^1[3456789]\d{9}$/
    // console.log(phone.test('123212dsa124'))

let rever = /(?!\b)(?=(\d{3})+\b)/g


let getnum = /(\d+)/g

// console.log(getnum.exec('dgfhfgh254bhku289fgdhdy675gfh'))

let regs = /(-)([a-z])/g
    // console.log('get-element-by-id'.replace(reg, function(params) {
    //     return params.slice(1).toUpperCase()
    // }))

var result = /(?=hell)^^hello?\b\b$/.test("hell");
// console.log(result);

function camelize(str) {
    return str.replace(/[-_\s]+(.)?/g, function(match, c) {
        return c ? c.toUpperCase() : '';
    });
}
// console.log(camelize('-moz-transform'));

var string = "12345";
var regex = /(\d{1,3}?)(\d{1,3})$/;
// console.log(string.match(regex));

var result = "hello".replace(/^|$/g, '#');
// console.log(result)

var result = "a[JS] Lesson_01.mp4".replace(/\b/g, '#');
// console.log(result); 
// => "[#JS#] #Lesson_01#.#mp4#"
let reg = /((?=.*\d)(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])|(?=.*[A-Z])(?=.*[a-z])(?=.*\d))^[0-9a-zA-Z]{6,12}$/

console.log( reg.test("1234567") ); // false 全是数字
console.log( reg.test("abcdef") ); // false 全是小写字母
console.log( reg.test("ABCDEFGH") ); // false 全是大写字母
console.log( reg.test("ab23C") ); // false 不足6位
console.log( reg.test("ABCDEF234") ); // true 大写字母和数字
console.log( reg.test("abcdEF234") ); // true 三者都有
