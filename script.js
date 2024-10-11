function greet(name = 'Vince') {
    return `Greetings, ${name}!`;
}

console.log(greet('Guest'));
console.log(greet());
console.log(greet('Ralph'));

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 10));

let x = 10;
 
function changeValue() {
    let x = 69;
    return x;
}

console.log(x);
console.log(changeValue());

function outerFunction() {
    let count = 0;
    return function() {
        count++;
        return count;
        
    }
    
}
const updateCount = outerFunction();
console.log(updateCount());
console.log(updateCount());
console.log(updateCount());