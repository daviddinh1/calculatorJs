//use these later
let num1;
let operator;
let num2;

function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
 return a/b;
}

function operate(num1,num2,operator){
  if(operator == '+'){
    return add(num1,num2);
  }
  else if(operator == '-'){
    return subtract(num1,num2);
  }
  else if(operator == '*'){
    return multiply(num1,num2);
  }
  else{
    return divide(num1,num2);
  }
}

num1 = 2;
num2 = 5;
operator = '/';

const test = operate(num1,num2,operator);
console.log(test);