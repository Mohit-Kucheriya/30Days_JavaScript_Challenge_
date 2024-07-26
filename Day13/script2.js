// import { add, obj } from "./script1.js";
// import Hello, {sum,sub,mul,div} from "./script1.js"

// const result = add(10, 20);
// const obj1 = obj;
// console.log(obj1.greet())
// console.log(result)

// console.log(sum(20,30));
// console.log(sub(20,3));
// console.log(mul(20,30));
// console.log(div(20,30));

// Hello()

import * as mathOp from "./script3.js"

const sum1 = mathOp.add(100,20);
const sub1 = mathOp.sub(10,2020);
const difference = mathOp.diff(102020,20);
const divide = mathOp.div1(10,5);
const PIvalue = mathOp.PI


console.log(`Addition: ${sum1}`);
console.log(`Subtraction: ${sub1}`);
console.log(`Difference: ${difference}`);
console.log(`Divide: ${divide}`);
console.log(`PIValue: ${PIvalue}`);