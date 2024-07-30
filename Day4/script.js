// Activity 1: For Loops
// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
}

// Activity 2: While Loop
// Task 3
let j = 1;
let sum = 0;
console.log(j);
while (j <= 10) {
    sum = sum + j;
    j++;
}
console.log("Sum =", sum);

// Task 4
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Activity 3: Do.. While Loop
// Task 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Task 6
let fact = 1;
let n = 5
for (let i = 1; i <= n; i++) {
    fact = fact * i
}
console.log(fact)

let num = -1;
let facts = 1;
let m = 1;
if (num < 0) {
    console.log(`Factorial of negative number is not possible`);
}

do {
    facts = facts * m;
    m++
} while (m <= num);
console.log(facts)

// Activity 4: Nested Loops
// Task 7

for (let i = 1; i <= 5; i++) {
    let star = "";
    for (j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}

for (let i = 1; i <= 5; i++) {
    let num = ""
    for (j = 1; j <= i; j++) {
        num = num + i
    }
    console.log(num);
}

for (let i = 1; i <= 5; i++) {
    let num = ""
    for (j = 1; j <= i; j++) {
        num = num + j
    }
    console.log(num);
}

// Activity 5: Loop Control Statement
// Task 8
for (let c = 1; c <= 10; c++) {
    if (c == 5) {
        continue
    }
    console.log(c)
}

// Task 9
let b = 1;
while (b <= 10) {
    if (b == 7) {
        break;
    }
    console.log(i);
    i++
}
