// Day 10: Event Handling
// Activity 1: Basic Event Handling
// Task 1
let p = document.getElementById("task1-para");
let btnChange = document.getElementById("btnChange");

btnChange.addEventListener("click", function () {
    p.textContent = "Text Changed";
});

// Task 2
let img1 = document.getElementById("img1");
let check = 0;

img1.addEventListener("dblclick", function () {
    if (check == 0) {
        img1.style.opacity = 0;
        check = 1;
    } else {
        img1.style.opacity = 1;
        check = 0;
    }
});

// Activity 2: Mouse Events
// Task 3
p.addEventListener("mouseenter", function () {
    p.style.backgroundColor = "pink";
});

// Task 4
p.addEventListener("mouseleave", function () {
    p.style.backgroundColor = "antiquewhite";
});

// Activity 3: Keyboard Events
// Task 5
let inputTask = document.getElementById("task2");
inputTask.addEventListener("keydown", function () {
    console.log("Key was pressed");
});

// Task 6
inputTask.addEventListener("keyup", function () {
    let p2 = document.getElementById("task2-para");
    let paragraphValue = p2.textContent;
    console.log(paragraphValue)
})

// Activity 4: Form Events
// Task 7
let form = document.querySelector("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("First name :", fname.value);
    console.log("Last name :", lname.value);
    console.log("Email :", email.value);

});

// Activity 5: Event Delegation
// Task 9
document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.getElementById("listItems");

    listItems.addEventListener("click", function (event) {
        // console.log(event);
        if (event.target && event.target.nodeName == "LI") {
            console.log("Event ListItem clicked:", event.target.textContent);
        }

    })
})

// Task 10

//1. HTML Structure:
// <div class="eventListen">: This is the clickable area. When you click on this, new paragraphs will be added.

//2. JavaScript Code:
// document.addEventListener("DOMContentLoaded", function() { ... });: This makes sure the JavaScript runs only after the entire HTML has loaded.
// let eventListen = document.querySelector(".eventListen");: This finds the <div> with the class eventListen so we can work with it.
// eventListen.addEventListener("click", function(event) { ... });: This sets up a click event on that <div>. When the <div> is clicked, it runs the code inside this function.

// 3. Inside the Click Event Function:

// let paragraphs = eventListen.querySelectorAll("p");: This finds all <p> elements inside the <div>.
// if (paragraphs.length === 0 || paragraphs[paragraphs.length - 1].textContent !== "Adding data dynamically") { ... }: This checks:
// If there are no paragraphs yet (paragraphs.length === 0), or
// If the last paragraph added doesn't have the text "Adding data dynamically".
// let p = document.createElement("p");: This creates a new <p> element.
// p.textContent = "Adding data dynamically";: This sets the text inside the new <p> element.
// eventListen.appendChild(p);: This adds the new <p> element to the <div>.

document.addEventListener("DOMContentLoaded", function () {
    let eventListen = document.querySelector(".eventListen");

    eventListen.addEventListener("click", function (event) {
        // Check if the last added paragraph is not the same as the new one
        let paragraphs = eventListen.querySelectorAll("p");
        if (paragraphs.length === 0 || paragraphs[paragraphs.length - 1].textContent !== "Adding data dynamically") {
            let p = document.createElement("p");
            p.textContent = "Adding data dynamically";
            eventListen.appendChild(p);
        }
    });
});
