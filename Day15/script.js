// Day 15: Closures
// Activity 1: Understnading Closures
// Task 1
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    y();
}
x();

// Task 2
function privateCounter() {
    let counter = 0;

    return function increaseCounter() {
        counter++;
        console.log(`Counter = ${counter}`);
    };
}

let count = privateCounter();
count();
count();
count();

// Activity 2: Practical Closures
// Task 3
function generateId() {
    let lastID = 0;
    return function () {
        lastID++;
        return lastID;
    };
}

let callLastGenerateId = generateId();
console.log(callLastGenerateId());
console.log(callLastGenerateId());
console.log(callLastGenerateId());

// Task 4
function userName(username) {
    let getUser = username;
    return function greetUser() {
        console.log(`Hello ${getUser} how are you!`);
    };
}
let callUser = userName("Mohit");
callUser();

// Activity 3: Closures in Loop
// Task 5
function createArray(n) {
    let functions = [];

    for (let i = 0; i < n; i++) {
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}

let getArray = createArray(5);
console.log(getArray);
getArray[0]();

