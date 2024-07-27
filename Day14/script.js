// Day 14: Classes
// Activity 1: Class Definition
// Task 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello my name is ${this.name}`)
    }

    static genericGreet() {
        return `Hello Nice to meet you`
    }
}

let p1 = new Person("Mohit", 23);
console.log(p1);
p1.greet()

// Task 2
p1.age = 25;
console.log(p1);
console.log(p1.age)

// Activity 2: Class Inheritence
// Task 3
class Student extends Person {
    static numberOfStudent = 0
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.numberOfStudent++
    }
    greet() {
        return `Hello my name is ${this.name} and my studentId is ${this.studentId}`
    }
    id() {
        return this.studentId
    }

    static getTotalStudent() {
        return Student.numberOfStudent
    }
}

const s1 = new Student("Adam", 23, 36);
console.log(s1);
console.log(s1.studentId);
console.log(s1.id());

// Task 4
const s2 = new Student("Ruchita", 23, 25)
console.log(s2.greet());

const p2 = new Person("Adam", 26);
console.log(p2);

// Activity 3: Static MEthod and Properties
// Task 5
// Static Method: A method defined with the static keyword that can be called on the class itself rather than on instances of the class.
// Usage: Call the static method directly on the class without creating an instance.
// Static methods are called on the class itself, not on instances of the class.
const message = Person.genericGreet();
console.log(message)

// Task 6
const student1 = new Student("Alice", 20, 12345);
const student2 = new Student("Bob", 22, 67890);
const student3 = new Student("Charlie", 21, 11223);

console.log(Student.getTotalStudent());

// Activity 4: Getter and Setter
// Task 7
class FullName {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname
    }

    get fullName() {
        return `${this._firstname} ${this._lastname}`
    }

}

let f1 = new FullName("Mohit", "Kucheriya");
console.log(f1.fullName)