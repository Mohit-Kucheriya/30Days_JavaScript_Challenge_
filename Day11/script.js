// Day 11: Promises and Async/Await
// Activity 1: Understanding Promises
// Task 1
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Your promise is resolved");
    }, 2000);
});

promise.then((data) => {
    console.log(data);
});

let promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Mohit Kucheriya", email: "mohit@example.com" })

    }, 1000);
})

promiseOne
    .then(function (data) {
        console.log(data);
        console.log(data.username);
    })

// Task 2
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Your promise is rejected");
    }, 2000);
});

promise1.catch((e) => {
    console.log(e);
});

let checkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = Math.random() > 0.5;
        console.log(success);
        if (success) {
            resolve("Success is greater than 0.5");
        } else {
            reject("Promise Fail!");
        }
    }, 2000);
});

checkPromise
    .then((data) => {
        console.log("Promise Resolved", data);
    })
    .catch((e) => {
        console.log("Caught Error", e);
    });

// Activity 2: Chaining Promises
// Task 3
function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    });
}
function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🥖";
            resolve(dough);
            // reject("Something went wrong")
        }, 2000);
    });
}
function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);
    });
}

getCheese()
    .then((cheese) => {
        console.log("You gave me cheese", cheese);
        return makeDough(cheese);
    })

    .then((dough) => {
        console.log("You gave me dough", dough);
        return bakePizza(dough);
    })
    .then((pizza) => {
        console.log("Here is your Pizza", pizza);
    })
    .catch((data) => {
        console.log("Some error Occured");
    });

// Activity 3: Using Async/Await
// Task 4
async function orderPizza() {
    const cheese = await getCheese();
    console.log(cheese);
    const dough = await makeDough(cheese);
    console.log(dough);
    const pizza = await bakePizza(dough);
    console.log("Here is your Pizza", pizza);
}

orderPizza();
// Task 5
async function orderPizza() {
    try {
        const cheese = await getCheese();
        console.log(cheese);
        const dough = await makeDough(cheese);
        console.log(dough);
        const pizza = await bakePizza(dough);
        console.log("Here is your Pizza", pizza);
    } catch (error) {
        console.log("Some Error Occured,", error);
    }
}

// Activity 4: Fetching Data from an API
// Task 6
function randomJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.setup);
            console.log(data.punchline);
        })
        .catch((error) => {
            console.log("Error occured in fetching joke", error);
        });
}

randomJoke();

// Task 7
async function fetchJoke() {
    try {
        let joke = await fetch("https://official-joke-api.appspot.com/random_joke");
        let getRes = await joke.json();
        console.log(getRes.type);
        console.log(getRes.setup);
        console.log(getRes.punchline);
    } catch (error) {
        console.log("Error while fetching joke", error);
    }
}
fetchJoke();

async function fetchingData() {
    try {
        let getFetch = await fetch("https://jsonplaceholder.typicode.com/users");
        let response = await getFetch.json();
        console.log(response);
        response.forEach((element) => {
            console.log("Name:", element.name);
            console.log("Username:", element.username);
            console.log("Email:", element.email);
        });
    } catch (error) {
        console.log("Something went wrong", error);
    }
}
fetchingData();

// Activity 5: Concurrent Promises
// Task 8

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms);
    })
}

async function waitForResponse() {
    // await delay(2000)
    // await delay(2000)
    // await delay(2000)
    // await delay(2000)
    // await delay(2000)
    let delays = [delay(200), delay(2000), delay(100), delay(5000)];
    await Promise.all(delays)
    console.log("Done")
}

waitForResponse()


// Task 9

// Creating Promises:

// promise1 is a promise that resolves after 500 milliseconds with the value 'first'.
// promise2 is a promise that resolves after 100 milliseconds with the value 'second'.
// Using Promise.race:

// Promise.race([promise1, promise2]) returns a new promise that resolves or rejects as soon as the first promise in the array resolves or rejects.
// In this case, promise2 resolves first (after 100 milliseconds), so the promise returned by Promise.race resolves with the value 'second'.

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function1")
        }, 2000);
    })
}
function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function2")
        }, 200);
    })
}
function func3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function3")
        }, 1000);
    })
}

let listOfPromises = [func1(), func2(), func3()];
Promise.race(listOfPromises)
    .then((result) => {
        console.log("Success", result)
    })

    .catch((error) => {
        console.log("Error Occured", error);
    })