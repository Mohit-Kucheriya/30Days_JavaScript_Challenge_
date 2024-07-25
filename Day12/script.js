// Day 12: Error Handling
// Activity 1: Basic Error Handling with
// Task 1
function greet() {
    console.log("Hello1");
    console.log("Hello2");
    try {
        throw new Error("This is intentionally thrown error");
    } catch (error) {
        console.log("Error", error);
    }
    console.log("Hello3");
}

greet();

// Task 2
function checkDenominator(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Denominator cant be Zero");
        }
        return numerator / denominator;
    } catch (error) {
        console.log("caught error", error.message);
        return null;
    }
}

let result = checkDenominator(10, 0);
console.log(result);

// Activity 2: Finally Block
// Task 3
function finallyBlock() {
    try {
        let a = 10;
        console.log("Program Run successfully");
        console.log(b);
        throw new Error("Cannot access before initilization");
    } catch (error) {
        console.log(error);
    } finally {
        console.log(
            "The code inside the finally block will always execute, whether an error was thrown in the try block or not"
        );
    }
}

finallyBlock();

// Activity 3: Custom Error Objects
// Task 4
class ValidationError extends Error {
    constructor() {
        super();
        this.name = "Validation Error";
    }
}

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new ValidationError("Validation failed");
    }
    return x + y;
}

try {
    const output = add("5", 10);
    console.log(output);
} catch (error) {
    if (error.name == "Validation Error") {
        console.log("Hey user please enter a valid number only");
    }
}

// Task 5
// Step 1: Create a custom error class
class InputValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InputValidationError";
    }
}

function validateInput(input) {
    if (typeof input !== "string" || input.trim() === "") {
        throw new InputValidationError("Input cannot be empty or whitespace.");
    }
    return input;
}

try {
    const userInput = "Mohit";
    const validatedInput = validateInput(userInput);
    console.log("Validated input:", validatedInput);
} catch (error) {
    if (error instanceof InputValidationError) {
        console.log("Validation Error:", error.message);
    } else {
        console.log("An unexpected error occurred:", error.message);
    }
}

// Activity 4: Error Handling in Promises
// Task 6
let checkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = Math.random() > 0.5;
        console.log(success);
        if (success) {
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    }, 2000);
});

checkPromise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// Task 7
class FetchError extends Error {
    constructor(message) {
        super(message);
        this.name = "FetchError";
    }
}

async function checkAsync() {
    try {
        const url = await fetch(
            "https://official-joke-api.appspot.com/rando_joke"
        );
        if (!url.ok) {
            // console.dir(url)
            throw new FetchError(`Network response was not ok: ${url.status}`);
        }

        const result = await url.json();
        console.log(result.setup);
        console.log(result.punchline);
    } catch (error) {
        if (error instanceof FetchError) {
            console.log("Custom Error", error.message)
        } else {
            console.log("Error whike fetching data", error)
        }
    }
}
checkAsync();

// Activity 5:Graceful Error Handling in Fetch
async function fetchingData() {
    try {
        let getFetch = await fetch("https://jsonplaceholde.typicode.com/users");
        let response = await getFetch.json();
        console.log(response);
        response.forEach((element) => {
            console.log("Name:", element.name);
            console.log("Username:", element.username);
            console.log("Email:", element.email);
        });

    } catch (error) {
        console.log("Something went wrong", error.message);
    }
}
fetchingData();
