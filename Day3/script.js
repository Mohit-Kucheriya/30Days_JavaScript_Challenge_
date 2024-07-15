// Activity 1: If-Else Statement
// Task 1
let num = 0;
if (num > 0) {
    console.log(`Number ${num} is positive`);
} else if (num < 0) {
    console.log(`Number ${num} is negative`);
} else {
    console.log(`Number is Zero`);
}

// Task 2
let age = 18;
if (age >= 18) {
    console.log("You can vote");
} else if (age < 0) {
    console.log("Age can't be -ve");
} else {
    console.log("You cannot vote");
}

// Activity 2:Nested  If-Else Statement
// Task 3
let a = 10;
let b = 7;
let c = 8;

if (a > b) {
    if (a > c) {
        console.log(`${a} a is greater`);
    } else {
        console.log(`${c} c is greater`);
    }
} else if (b > c) {
    console.log(`${b} b is greater`);
} else {
    console.log(`${c} c is greater`);
}

// Activity 3: Swutch Case
// Task 4
let day = 5;
switch (day) {
    case 1:
        console.log(`Day ${day} is Monday`);
        break;

    case 2:
        console.log(`Day ${day} is Tuesday`);
        break;

    case 3:
        console.log(`Day ${day} is Wednesday`);
        break;

    case 4:
        console.log(`Day ${day} is Thursday`);
        break;

    case 5:
        console.log(`Day ${day} is Friday`);
        break;

    case 6:
        console.log(`Day ${day} is Saturday`);
        break;

    case 7:
        console.log(`Day ${day} is Sunday`);
        break;

    default:
        console.log("Enter the day between 1-7");
        break;
}

// Task 5
let marks = 34;
switch (true) {
    case (marks >= 85):
        console.log(`Congratulation you score ${marks} marks with A Grade`);
        break;

    case (marks >= 75):
        console.log(`Congratulation you score ${marks} marks with B Grade`);
        break;

    case (marks >= 65):
        console.log(`Congratulation you score ${marks} marks with C Grade`);
        break;

    case (marks >= 55):
        console.log(`Congratulation you score ${marks} marks with D Grade`);
        break;

    case (marks >= 33):
        console.log(`Congratulation you score ${marks} marks & Perform better next time`);
        break;

    default:
        console.log("Sorry you have failed with F Grade");
        break;
}

function switchCase() {
    //  Using switch (true)
    // When you use switch (true), the switch statement evaluates the expression true once. Each case then compares true against the result of a boolean expression. If the expression evaluates to true, that case block is executed. Here's a step-by-step explanation:

    // Expression Evaluation: The switch statement evaluates true once.
    // Case Comparisons: Each case compares its expression to true.
    // Example:

    // let marks = 75;

    // switch (true) {
    //     case (marks >= 85):
    //         console.log(`Congratulations! You scored ${marks} marks with A Grade`);
    //         break;
    //     case (marks >= 75):
    //         console.log(`Congratulations! You scored ${marks} marks with B Grade`);
    //         break;
    //     case (marks >= 65):
    //         console.log(`Congratulations! You scored ${marks} marks with C Grade`);
    //         break;
    //     case (marks >= 55):
    //         console.log(`Congratulations! You scored ${marks} marks with D Grade`);
    //         break;
    //     case (marks >= 33):
    //         console.log(`Congratulations! You scored ${marks} marks. Perform better next time`);
    //         break;
    //     default:
    //         console.log("Sorry, you have failed with F Grade");
    //         break;
    // }
    // Detailed Breakdown
    // switch (true): The switch statement starts by evaluating the expression true.
    // case (marks >= 85): This expression is evaluated. If marks >= 85 is true, it matches the switch expression (which is also true), and the corresponding block is executed. If not, it moves to the next case.

    // case (marks >= 75): This expression is evaluated. If marks >= 75 is true, it matches the switch expression (true), and the corresponding block is executed. If not, it moves to the next case.

    // This process continues for each case until a matching condition is found or until the default case is executed if no matches are found.

    // Why This Works
    // The switch statement doesn't inherently support range conditions (e.g., marks >= 85). By using switch (true), you leverage the ability of case clauses to contain any expressions, allowing them to be boolean expressions. This way, you can simulate if-else if logic within a switch statement.

    // Example in Action
    // Let's say marks is 75:

    // switch (true) evaluates the switch expression as true.
    // It checks the first case: marks >= 85 which evaluates to false.
    // It moves to the next case: marks >= 75 which evaluates to true.

    // Since true === true, it executes the corresponding block:
    // console.log(`Congratulations! You scored ${marks} marks with B Grade`);

    // The break statement prevents further case evaluations.
    // This approach effectively uses the switch statement to handle range-based conditions in a clear and structured way.
}

// Activity 4: Conditional (Ternary) Operator
// Task 6
let checkNumber = 15;
checkNumber % 2 === 0 ? console.log(`${checkNumber} is Even`) : console.log(`${checkNumber} is Odd`)

// Activity 5: Combinig Conditions
// Task 7
let leapYear = 2004

if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)) {
    console.log(`${leapYear} is a Leap Year`)
}
else {
    console.log(`${leapYear} is not a Leap Year`)
}