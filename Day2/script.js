// Day 2: Operators
// Activity 1: Arithmetic Operators

// Task 1
let add1 = 10;
let add2 = 20;
let addNumbers = add1 + add2;
console.log(addNumbers);

// Task 2
let sub1 = 10;
let sub2 = 20;
let subNumbers = sub2 - sub1;
console.log(subNumbers);

// Task 3
let mul1 = 5;
let mul2 = 5;
let mulNumbers = mul1 * mul2;
console.log(mulNumbers);

// Task 4
let div1 = 10;
let div2 = 2;
let divNumbers = div1 / div2;
console.log(divNumbers);

// Task 5
let rem1 = 10;
let rem2 = 5;
let remNumbers = rem1 % rem2;
console.log(remNumbers);

// Activity 2: Assignment Operators
// Task 6

let abc = 10;
abc += 5;
console.log(abc);

// Task 7
let xyz = 10;
xyz -= 5;
console.log(xyz);

// Activity 3: Comparison  Operators
// Task 8
let a = 10
let b = 5
let result = a > b;
let result1 = a < b;

console.log(result)
console.log(result1)

// Task 9
let a1 = 10;
let b1 = 10;
let answer = a1 >= b1
let answer1 = a1 <= b1

console.log(answer)
console.log(answer1)

// Task 10
// let x = 69;
// let y = 72;
// let checkResult = x == y;
// let checkResult1 = x === y;

// console.log(checkResult)
// console.log(checkResult1)

let x = 69;
let y = "69";
let checkResult = x == y;
let checkResult1 = x === y;

console.log(checkResult)
console.log(checkResult1)

// Activity 4: Logical Operators
// Task 11 & 12
// && logical AND returns true if both expression are true
// || logical OR if one value is true final result is true
let a21 = 10
let a22 = 12

let b21 = 10;
let b22 = 20;

let final = (a22 > a21 && b21 < b22);
let final1 = (a22 > a21 || b21 > b22);

console.log("&& logical AND, returns true if both expression are true i.e final result here is", final)
console.log("|| logical OR, if one value is true final result is true i.e final result here is", final1)

// Task 13
// ! logical NOT, it simply reverse the final value .i.e if the expression is false, the output will be true 

let f1 = 10;
let f2 = 20;
let finalAnswer = f1 < f2
console.log("Here the expression is true i.e 10 < 20 but using !(finalAnswer) makes the final output to", !(finalAnswer));

// Activity 5: Ternary Operator
let numberIs = 10;
let checkNumberIs = numberIs > 0 ? "Positive number" : "Negative number";
console.log(checkNumberIs);

// Feature Request

let r1 = 10;
let r2 = 13;

// Arithmetic Operators
console.log("Addition :", r1 + r2)
console.log("Subtraction :", r1 - r2)
console.log("Multiplication :", r1 * r2)
console.log("Divide :", r1 / r2)
console.log("Remainder :", r2 % r1)

// Comparison Operators
console.log(r1 > r2)
console.log(r1 < r2)
console.log(r1 >= r2)
console.log(r1 <= r2)

// Logical Operator
console.log(10 > 12 && 10 < 12)
console.log(10 > 12 || 10 < 12)

