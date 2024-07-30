// Day 7: Objects
// Activity 1: Object Creation and Access
// Task 1
let objBook = {
    title: "Think & Grow Rich",
    author: "Naoplean Hill",
    year: 2000,
    getMethod: function () {
        return {
            title: objBook.title,
            author: objBook.author,
        };
    },
    getYear: function (year) {
        return (objBook.year = year);
    },
    getThis: function () {
        return {
            title: this.title,
            year: this.year,
        };
    },
};

console.log(objBook);

// Task 2
console.log(objBook.title);
console.log(objBook.author);

// Activity 2: Object Methods
// Task 3
let getMethodObj = objBook.getMethod();
console.log(getMethodObj);
console.log(getMethodObj.title);
console.log(getMethodObj.author);

// Task 4
let getYearObj = objBook.getYear(2001);
console.log(getYearObj);
console.log(objBook);
console.log(objBook.year);

// Activity 3: Nested Objects
// Task 5
let library = {
    name: "City Library",
    books: [
        {
            title: "Thik & Grow Rich",
            author: "Napolean Hill",
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
        },
        {
            title: "Philospher Stone",
            author: "J.K Rowling",
        },
        {
            title: "Order of Phoneix",
            author: "J.K Rowling",
        },
    ],
};

console.log(library);

// Task 6
console.log(library.name);
console.log(library.books[0].title);

// Activity 4: The this keyword
// Task 7
let getThisMethod = objBook.getThis();
console.log(getThisMethod);
console.log(getMethodObj.title);
console.log(getMethodObj.author);

// Activity 5: Object Iteration
// Task 8

// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It allows you to access each property name (or key) in the object one by one. This loop is particularly useful when you want to inspect or manipulate the properties of an object.

for (const key in objBook) {
    const element = objBook[key];
    console.log(element);
}

// Task 9:
let key = Object.keys(objBook);
console.log(key);
key.forEach((key) => console.log(key));

let values = Object.values(objBook);
console.log(values);
values.forEach((value) => console.log(value));

