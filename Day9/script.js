// Day 9: DOM Manipulation
// Activity 1: Selecting and Manipulating Elements
// Task 1
let h1 = document.getElementById("mainHeading");
h1.textContent = "30 Days JavaScript with chai aur code";

// Task 2
let p = document.querySelector(".mainPara");
p.style.backgroundColor = "pink";

// Activity 2: Creating and Appending Element
let divAdd = document.createElement("div");
divAdd.textContent =
    "I just wanted to take a moment to let you know how amazing you are. Your positivity, kindness, and dedication shine through in everything you do.";

let body = document.getElementsByTagName("body")[0];
console.log(body);
body.appendChild(divAdd);

// Task 4
let newLi = document.createElement("li");
newLi.textContent = "Newly Added li";
document.getElementById("listItem").appendChild(newLi);

// Activity 3: Removing Elements
// Task 5
let box1 = document.querySelector(".box1")
box1.remove()

// Task 6
let box = document.querySelector(".box");
let h2Heading = document.querySelector(".mainHeading2")
box.removeChild(h2Heading)

// Activity 4: Modify Attributes and Classes
// Task 7
let img1 = document.querySelector("#img1");
img1.setAttribute("src", "https://theplace-2.com/cache/archive/sydney_sweeney/img/09-02-2024-madame-we(4)-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg")

// Task 8
img1.classList.remove("remove");
img1.classList.add("added");

// Activity 5: Event Handling
// Task 9
let pDiv = document.querySelector(".pChange");
let btnChange = document.querySelector(".btnChange");

btnChange.addEventListener("click", function () {
    pDiv.textContent = "Text Changed"
})

// Task 10
img1.addEventListener("mouseover", function () {
    img1.style.border = "5px solid black"
})




