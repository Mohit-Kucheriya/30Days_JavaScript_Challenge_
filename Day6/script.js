// Day 6: Arrays
// Activity 1: Array Creation and Access
// Task 1
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Task 2
console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);

// Activity 2: Array Method(Basic)
// Task 3
// push add the value in the last
let arr2 = [10, 20, 30, 40];
arr2.push(50);
console.log(arr2);

// Task 4
// pop remove the element from last
arr2.pop();
console.log(arr2);

// Task 5
// shif remove the first element form array
arr2.shift();
console.log(arr2);

// Task 6
// unshift add element in the beginning
arr2.unshift(69);
console.log(arr2);

// Activity 3: Array Method(Intermediate)
// Task 7

let mapArr = [1, 2, 3, 4, 5];

let newMapArr = mapArr.map((e) => {
    return e * 2;
});
console.log(newMapArr)

// Task 8
let filterArr = [1, 2, 3, 4, 5, 6]

let newFilterArr = filterArr.filter(e => e % 2 === 0)
console.log(newFilterArr);

// Task 9
let reduceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newReduceArr = reduceArr.reduce((acc, res) => {
    return acc + res
});
console.log(newReduceArr)

// Activity 4: Array Iteration
// Task 10
let forArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < forArr.length; i++) {
    console.log(forArr[i])
}

// Task 11
let forEachArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let newForEachArr = forEachArr.forEach(e => {
    console.log(e)
});

// Activity 5: Multi-dimensional Array
let multiDimArr = [[1, 2], [3, 4]]
for (let i = 0; i < multiDimArr.length; i++) {
    for (let j = 0; j < multiDimArr[i].length; j++) {
        console.log(multiDimArr[i][j]);
    }
}

// Task 13
console.log(multiDimArr[0][1])




