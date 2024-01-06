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

let displayValue; //idk this is used for a certain step
const btnTest = document.querySelector(".container");//checks if button is clicked
const display = document.querySelector("#display")

function populate(btnTest,display){ //figure out how to detect "which button is clicked" then figure out how to populate the screen
  btnTest.addEventListener('click',function(e){
    displayValue = e.target.id; //e accesses the object itself
    console.log(displayValue);

    /*
    const number = document.createElement('div');
    number.textContent = displayValue;
    display.appendChild(number);
    */

   if(displayValue == "clear"){
    display.textContent = "0";
   }else{
    display.textContent += displayValue; //when doing css create this into its own element 
   }
  });
}

num1 = 2;
num2 = 5;
operator = '/';

const test = operate(num1,num2,operator);
console.log(test);

populate(btnTest,display);