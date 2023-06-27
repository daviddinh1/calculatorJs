let num1 = 0;
let num2 = 0;
let operand = "";
let displayVal = 0;


function add(num1,num2){
 return num1 + num2;
}

function subtract(num1,num2){
 return num1 - num2;
}

function multiply(num1,num2){
 return num1 * num2;
}

function divide(num1,num2){
 return num1/num2;
}

function operate(operand,num1,num2){
 if(operand === "+"){
  return add(num1,num2);
 } else if(operand === "-"){
  return subtract(num1,num2);
 } else if(operand === "*"){
  return multiply(num1,num2);
 } else if(operand === "/"){
  return divide(num1,num2);
 }
}

function changeDisplay(){
  document.getElementById('num7').onclick = function(){
   displayVal = 7;
   document.getElementById('display').innerHTML += displayVal;
 }
 document.getElementById('num8').onclick = function(){
   displayVal = 8;
   document.getElementById('display').innerHTML += displayVal;
 }
 document.getElementById('num9').onclick = function(){
   displayVal = 9;
   document.getElementById('display').innerHTML += displayVal;
 }
 document.getElementById('num4').onclick = function(){
   document.getElementById('display').innerHTML += 4;
   displayVal = 4;
 }
 document.getElementById('num5').onclick = function(){
   document.getElementById('display').innerHTML += 5;
   displayVal = 5;
 }
 document.getElementById('num6').onclick = function(){
   document.getElementById('display').innerHTML += 6;
   displayVal = 6;
 }
 document.getElementById('num1').onclick = function(){
   document.getElementById('display').innerHTML += 1;
   displayVal = 1;
 }
 document.getElementById('num2').onclick = function(){
   document.getElementById('display').innerHTML += 2;
   displayVal = 2;
 }
 document.getElementById('num3').onclick = function(){
   document.getElementById('display').innerHTML += 3;
   displayVal = 3;
 }
 document.getElementById('num0').onclick = function(){
   document.getElementById('display').innerHTML += 0;
   displayVal = 0;
 }
 document.getElementById('clear').onclick = function(){
  document.getElementById('display').innerHTML = 0;
  displayVal = 0;
 }
}

changeDisplay();


console.log(operate("/",1,1));

