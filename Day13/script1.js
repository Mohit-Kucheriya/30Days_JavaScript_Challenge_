// Day 13: Module
// Acrivity 1
// Task 1
export function add(num1, num2) {
    return num1 + num2
}

// Task 2
export const obj = {
    name: "Mohit",
    age: 23,
    greet: function () {
        return `Hello my name is ${this.name} I'm ${this.age} year old`
    }
}

// Activity 2: Named and Default Exports
// Named exports van be multiple but default export can be one only
// Task 3
function sum(a1, b1) {
    return a1 + b1
}
function sub(a2, b2) {
    return a2 - b2
}
function mul(a3, b3) {
    return a3 * b3
}
function div(a4, b4) {
    return a4 / b4
}

export {
    sum, sub, mul, div
}

// Task 4
export default function Hello(){
    console.log("Named and Default Export in Javascript")
}

// Activity 3: Importing Entire Module

// Activity 4: Using Third-Modules

