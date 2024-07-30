// Day 5
// Activity 1: Function Declaration
// Task 1
function isEvenOrOdd() {
    let n = 2;
    if (n > 0 && n % 2 == 0) {
        console.log(`${n} is Even Number`)
    } else {
        console.log(`${n} is Odd Number`)
    }
}
isEvenOrOdd()

// Task 2
function calSquare() {
    let square = 2;
    let result = square * square;
    return result
}
console.log(calSquare())

// Activity 2: Function Expression
// Task 3
let findMax = function (max1, max2) {
    max1 > max2 ? console.log(`${max1} is Maximum`) : console.log(`${max2} is Maximum`)
}

findMax(5, 50)

// Task 4
let concatString = function (str1, str2) {
    let result = str1 + str2;
    // console.log(result)
    return result
}
console.log(concatString("Mohit", "Hello"));

// Activity 3:Arrow Function
// Task 5
let sum = (a, b) => {
    return a + b
}
console.log(sum(10, 20));

// Task 6
let checkStr = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true
        }
        else {
            return false
        }
    }
}

checkStr("Mohit", "h")

// Activity 4: Functions Parameters and Default Parameters
// Task 7
let product = (p1, p2 = 10) => {
    let result = p1 * p2
    return result
}

product(2, 5);

// Task 8
let greetMessage = (name, age) => {
    alert(`Hello ${name} you are ${age} year old`)
}

greetMessage("Mohit", 23)
greetMessage("Ruchita", 23)

// Acitivity 5: Higher-Order Function
// Task 9
function multipleGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func()
    }
}

let greet = function () {
    console.log("Hello World")
}

multipleGreet(greet, 5);

// Task 10
let multipleFunc = function (func1, func2, val) {
    let result1 = func1(val)
    let result2 = func2(result1)
    return result2
}

let addNum = function (num) {
    return num + 2;
}

let multiplyNum = function (num) {
    return num * num
}

let num = 5

console.log(multipleFunc(addNum, multiplyNum, num))


