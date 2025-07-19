function zero(operation) {
    return operation ? operation(0) : 0;
}
function one(operation) {
    return operation ? operation(1) : 1;
}
function two(operation) {
    return operation ? operation(2) : 2;
}
function three(operation) {
    return operation ? operation(3) : 3;
}
function four(operation) {
    return operation ? operation(4) : 4;
}
function five(operation) {
    return operation ? operation(5) : 5;
} 
function six(operation) {
    return operation ? operation(6) : 6;
}
function seven(operation) {
    return operation ? operation(7) : 7;
}
function eight(operation) {
    return operation ? operation(8) : 8;
}
function nine(operation) {
    return operation ? operation(9) : 9;
}

function plus(rightOperand) {
    return function(leftOperand) {
        return leftOperand + rightOperand;
    };
}
function minus(rightOperand) {
    return function(leftOperand) {
        return leftOperand - rightOperand;
    };
}
function times(rightOperand) {
    return function(leftOperand) {
        return leftOperand * rightOperand;
    };
}
function dividedBy(rightOperand) {
    return function(leftOperand) {
        if (rightOperand === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return Math.floor(leftOperand / rightOperand);
    };
}

console.log("7 gånger 5 är:", seven(times(five())));       
console.log("4 plus 9 är:", four(plus(nine())));           
console.log("8 minus 3 är:", eight(minus(three())));       
console.log("6 delat med 2 är:", six(dividedBy(two())));   
console.log("5 plus 0 är:", five(plus(zero())));           