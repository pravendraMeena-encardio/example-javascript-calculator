
function add(a, b) { 
    return a + b;
}
function subtract(a, b) {
return a - b;
}
function multiply(a, b) { 
    return a * b;
}
function divide(a, b) { 
    if (b === 0) {
        return "Error: Cannot divide by zero";
}
return a / b;
}
function reminder(a,b) {
    return a % b;
}
// Simple demonstration
console.log("Calculator Demo:");
console.log("2 + 3 =", add(2, 3));
console.log("10-4=", subtract(10, 4));
console.log("5*6=", multiply(5, 6));
console.log("15/3=", divide(15, 3));
console.log("10/0=", divide(10, 0));
console.log("reminder of 5/4 is",reminder(5,4));
module.exports = { add, subtract, multiply, divide };