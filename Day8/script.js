// Day 8
// Activity 1: Template Literals
// Task 1
let personName = "Mohit Kucheriya";
let personAge = 23;
console.log(`Hi ${personName} you are ${personAge} year Old!`);

// Task 2
// The backticks allow for a multi-line string without the need for concatenation.
// Each new line in the template literal corresponds to a new line in the resulting string.
// When you run this code, it will output the string with the line breaks as specified.
let multiStr = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Pariatur eos tempora natus quae harum
inventore reprehenderit ex, 
dignissimos quos odit.`;
console.log(multiStr);

// Activity 2:Destructuring
// Task 3
let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(`${first}, ${second}`);

// Task 4
let obj = {
    title: "Think & Grow Rich",
    author: "Napolean Hill",
};

let { title, author } = obj;
console.log(title);
console.log(author);

// Activity 3: Spread and Rest Operator
// Task 5
let oldArr = [1, 2, 3, 4, 5];
let newArr = [...oldArr, 6, 7, 8, 9, 10];
console.log(newArr);

// Task 6
function sum(...args) {
    return args.reduce((acc, res) => acc + res);
}

let newSumArr = sum(11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
console.log(newSumArr);

// Activity 4: Default Parameter
// Task 7
function productNum(a, b = 5) {
    return a * b;
}
console.log(productNum(2, 10));
console.log(productNum(5));

// Activity 5:Enhanced Object Literal
// Task 8
let person = {
    name: "Mohit Kucheriya",
    age: 23,
    greet: function () {
        return `Hello my name is ${this.name}, I'm ${this.age} year Old!`;
    },
};
console.log(person);
console.log(person.greet());

// Task 9
// Computed property names allow you to use variables or expressions to determine the names of properties in an object.
// This lets you create property names dynamically, instead of using fixed names.
// Square Brackets []: Used to specify that the property name should be computed from an expression or variable.
let key = "color";
let value = "blue"

let car = {
    [key]: value // Here, [key] will be replaced with 'color'
}
console.log(car)
console.log(car.color)

