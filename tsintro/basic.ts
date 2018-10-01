let nm: string = 'android'

function calc(num: number): void {}
calc(10)

let fn: (num: number) =>void = function (num: number) {return}
fn(10)

let obj: {} ={
    10: 'android',
    true: {
        45:96
    }
}

let objv2: {[key: string]: string }={
    'android':'android',
    45:'9798'
}

let myvar: string | number | boolean ='android'

let myFn = function () {console.log('hi' + myvar) }
let arrFn = () => console.log(` hi ${myvar} `)