/**********************************
 * Created By: manoj Jha
 * Date Created: 12 July 2020
 * Purpose: javaScript Tutorial
 */


//statements lecture
//alert('Hello, World!'); /*alert('Hi');
/*console.log('Hello, World!');
console.log(2 + 2);
console.log(2 > 3);*/

//Semicolon and implicit semicolon
// console.log(3 + 
//     4 + 
//     5);
/*
This is a multiline comment
This is second line
Ctrl + /: Single line comment
Ctrl + Shift + /: Multiline comment
*/
//JavaScript Variables
/*var firstName = 'John';
firstName = 'Mark';
console.log(firstName);

var lastName;

//declaring multiple variables in single line
var age = 28 
 , gender = 'Male' 
 , occupation = 'Teacher';

 //Copying a variable
 var greet = 'Hello, World!';
 var msg = greet;
 console.log(greet);
 console.log(msg);

 //variable naming
 var firstName;
 var test = 20;
 var Test = 30;

 var FUNCTION = 40;
 var For = 40;
 */
/**************************************
 * JavaScript Datatypes
 */
//String datatype
/*var str = "This is a string";
console.log(str);
var type = typeof str;
console.log(type);

//Number
var age = 28;
var PI = 3.14;

//Infinity, -infinity, NaN
console.log(-10/0);

//NaN - not a Number
console.log('abc' - 2);

//Boolean
var x = true;
var y = false;

console.log(typeof x);
console.log(typeof y);

var isgreater = 10 > 20;
console.log(isgreater);

//Null
//null is a special value which represents 
//“nothing”, “empty” or “unknown value”.

var age = null;

//undefined
var firstName;
console.log(firstName);

//Dynamic typing
var msg = 'Goog Morning';
msg = 20;


//type coercion
var firstName = 'Steve';
var age = 20;
var IsMarried = false;

console.log(firstName + ' ' + age + '. is marries?' + IsMarried);
*/
/**********************************************
 * Math operator and operator precedence
 */
/*var x = 10, y = 5;

console.log(x + y);//addition
console.log(x - y);//substraction
console.log(x * y);//multiplication
console.log(x / y);//division (quotient)

console.log(11 % 3);//remainder
console.log(2 ** 3);//2 * 2 * 2 - x power y

var total = (10 + 3 - 5) * 4 / 2;
//(13 -5)*4/2
//8 * 4 / 2
//32/2 = 16
//left-to-right: 16
//right-to-left: 3
console.log(total);

//string concatenation

var x = 'Hello';
var y = 'World';

var z = x +' '+ y;
console.log(z);

//+ operator on string and number
console.log('Hello' + 2);
console.log(10 + 3 + 'Hello');

console.log('10' / 2)
console.log('Hello' - 2);

var x = 10;
x = x + 5;

x += 5;// x = x + 5
x -= 5//x = x - 5
x *= 2 // x = x * 2
x /= 2 // x = x / 2
*/
/**************************************
 * JavaScript Basic Operator
 */

//Assignment operator
//var x = 20;

/*var a = 2;
var b = 3;

var c = 10 - (a = b + 1);
console.log(c);

var x = y = z = 2 + 3 -1;
console.log(x);
console.log(y);
console.log(z);

//Increment / decrement Operator
x = 10;
x--; // x = x - 1
console.log(x);

//postfix notation: x++
//prefix notation: ++x

a = 5;
--a;
console.log(a);

*/
//prefix notation: the value is incremented 
//and then returned

/*var b = 5;
var c =++b;
console.log(c);

//postfix notation: value is first returned and
//then incremented

var d = 5;
var e = d++;
console.log(e);
console.log(d);
*/

//Comma operator

/*var x = (2 + 3, 5 - 2);//only last expressions result is returned
console.log(x);

// three operations in one line  
// for (a = 1, b = 3, c = a * b; a < 10; a++) {  
// 	    ...  
// }  


//typeof operator

//returns the datatype of a value or a varibale

var b;
var a = typeof b;
console.log(a);

console.log(typeof('Hello'));
*/
/***********************************
 * JavaScript Comparison Operator
 */

 //every comparison operation returns boolean result
/*var x = 3;
var y = 2;

var result = x > y;
console.log(result);


//equality and strict equality
//== : check the value and not datatype
//!= : non-equality
//=== : strict equality
// !== : strict non-eqality

console.log( 10 === 10);//true
console.log(0 !== 1);//true

//while comparing the value of datatype other 
//then number will be first converted to number

//An equality or non equality operator will only compare 
//for value and not datatype

//strict equality will first check the datatype. If datatype
//are different it will immidiately return false

//strict non equality will return true immiditaely if 
//the datatypes are different.

//Comparison with strings
console.log('A' > 'a');// A - 65, a - 97 // false
console.log('Grass' < 'Green');// a = 97 and e = 101//true


//Comparison with null and undefined
var x = null === undefined;
console.log(x);

var y = (null == undefined)
console.log(y);


//null will be converted to 0
//undefined will be converted to NaN
*/

/*console.log( null > 0 );  // false  
console.log( null == 0 ); // false  
console.log( null >= 0 ); // true

//in javascript null and undefined are equall to 
//each other but not equall to any other value.

console.log( undefined > 0 ); // false  
console.log( undefined < 0 ); // false  
console.log( undefined == 0 ); // false
*/
/*************************************
 * JavaScript Logical Operator
 */
//OR - ||

/*var x = false || false || false;
console.log(x)

var a = 2, b = 3;

var z = a > b || b == a || b <= a;
        //false || false || false
console.log(z);

var result = null || undefined || 20 ||  '';
            //false || false || true || false
console.log(result);

var res = null || false || NaN || undefined;
console.log(res);
*/
//AND - &&

/*var x = true && true && true;
console.log(x);

var result = 3 < 4 && 5 < 10 && 6 == 6;
console.log(result);

var a = 20 && 30 && undefined && null;
console.log(a);

var b = 20 && true && 'Hello, World!';
console.log(b);
*/

//NOT - !

/*var x = false;
var y = !x;
console.log(y);


var a = 0;
var result = !!a;
console.log(result);
*/
/************************************
 * JavaScript Modal Window
 */
//Alert
//display message
//alert('Welcome to my website');

//prompt
//get some input

//1. Message
//2. Default

//1. Prompt function will return the entered value when you click on Ok
//2. If no value is entered and OK button is clicked - empty string will be returned
//3. When cancel button is clicked - null value is returned.
// var age = prompt('Enter you age');
// console.log(age);

//Confirm
//get the confirmation

//1. OK returns true
//2. Cancel - returns false

// var x = confirm('Are you sure you want to delete this item');
// console.log(x);

// if(x === true){
//     //write the logic to delete the item
// }
/*******************************
 * JavaScript If - Else
 */

 //1. Ask user to enter his age
 //2. if age is greater then or equall to 18,
 //log a message - 'You are eligible for voting'
 //3. If the age is not greter than or equall to 18,
 //log the message - 'You are not eligible for voting'
 
//  var age = prompt('Please enter your age');

//  if(age >= 18){
//     console.log('You are eligible for voting');
//  } else {
//     console.log('You are not eligible for voting');
//  }

//  console.log('Thank you for voting');

//1. prompt user to enter the current time - 24 hour format
//2. If time is less then 12 - log 'Good Morning'
//3. If time is greater than equall to 12 and 
//smaller then 18 - log 'Good After noon'
//4. If time is greater then 18 and smaller then 
///equall to 21 - log 'Good Evening'
//5. otherwise log - 'Good night'

// var time = prompt('Please enter the current time');

// if(time < 12){
//     console.log('Good Morning');
// } else if(time >= 12 && time < 18){
//     console.log('Good Afternoon');
// } else if(time >= 18 && time <= 21){
//     console.log('Good Evening');
// } else {
//     console.log('Good Night');
// }

//Ternary operator
// if(age >= 18){
//     console.log('You are eligible for voting');
//  } else {
//     console.log('You are not eligible for voting');
//  }

//condition ? value1 : value2
// var age = prompt('Please enter your age');

//  var msg = age >= 18 ? 
//  'You are eligible for voting' : 
// 'You are not eligible for voting';

// console.log(msg);
/***************************************
 * JavaScript Functions
 */

//creating a function
//if a function is not returning any 
//value it returns undefined
// function greetings(name, timeOfDay = 'Morning'){
//     return 'Good '+timeOfDay+' '+name+'. Welcome back!';

// }

// //Calling a function
// var x = greetings('John');
// console.log(x)
// console.log(greetings('Mark', 'Evening'));

//function returning a value
// function sum(num1, num2){
//     return num1 + num2;
// }

// var x = sum(20, 30);
// console.log(x);
/********************************
 * JavaScript Function Expression
 */
//Function is a special type of value in javaScript.
//1. Function declaration does not end with semicolon
//but function expression should end with a semicolon
//2. Function declaration can be called before it is declared.
//but function expression cannot be called before it is create


// greetings('john','Morning');
// //Function Declaration
// function greetings(name, timeOfDay){
//     console.log('Good '+timeOfDay+ ' '+name+'. Welcome back!');
// }

// greetings();



//function Expression
// var greetings = function(name, timeOfDay){
//     console.log('Good '+timeOfDay+ ' '+name+'. Welcome back!');
// };

//greetings();
//Function can be used as a normal value
// console.log(greetings('John','Morning'));

// var x = greetings;
// var y = x;

// x('John', "Morning");
// y('Mark', 'Evening');


// var age = prompt("Please enter your age?", 20);  
	  
// var msg;  
  
// if (age >= 18) {  
//     msg = function() {  
//         console.log("You are eligible for voting!");  
//     };  
// } else {  
//     msg = function() {  
//        console.log("You are not eligible for voting!");  
//     };  
// }  
 
// msg()//calling function 
/*********************************************
 * JavaScript Switch Statement
 */
//Get a number input from user
//write a function to:
//return Sunday if input is 0
//return Monday if input is 1
//return Tuesday if input is 2
//return wednesday if input is 3
//return Thursday if input is 4
//return Friday if input is 5
//return saturday if input is 6
//return 'Not a day' otherwise

/*var input = Number(prompt('Please enter the day number'));

//switch statement does strict equality check
function getWeeksday(dayNum){
    var day;

    switch(dayNum){//'4'
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;   
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            day = 'Not a day'
    }

    return day;
}

console.log(getWeeksday(input));
*/

// var a = 4;  
	  
// switch (a) {  
//     case 3:  
//         console.log( 'value of a is 3' );  
//         break;
//     case 4:  
//         console.log( 'value of a is 4' ); 
//         break; 
//     case 5:  
//         console.log( 'value of a is 5' ); 
//         break ;
//     default:  
//         console.log( "value of a is not 3, 4 or 5" );  
// } 

// var a = 2;  
  
// switch (a) {  
//     case 1:  
//     case 2:   
//     case 3:  
//     case 4:  
//         console.log( 'value of a is smaller than equall to 4' );  
//         break;  
//     case 5:  
//         console.log( "value of a is greater than 4" );  
//         break;  
//     default:  
//         console.log( "value of a is greater than 4" );  
// }
//global object- window


// var firstName = 'John';
// var age = 20;

// firstName = window.firstName;

// console.log(window.age)

// function greetings(){
//     var msg = 'Hello, World';
//     console.log(msg);
// }
/***************************************
 * Hoisting in JavaScript
 */

/***** GLOBAL EXECUTION CONTEXT */
/*--------------------------------- */
/*|     VARIABLE OBJECT                           |*/
/*| greetings: function greetings(){
    console.log('Hello, World');
}                                                  |*/
/*| age : undefined                     |*/
/*|                                |*/
/*|                                |*/
/*|                                |*/
/*|                                |*/
/*--------------------------------- */

// greetings();

// function greetings(){
//     console.log('Hello, World');
// }

// console.log(age);
// var age = 20;

// msg();
// var msg = function(){
//     console.log('Hi');
// }




// var age = 20;// Global execution context

// function greetings(){
//     var age = 28;//execution context of greeting function
//     console.log(age);
// }

// console.log(age);
// greetings();
/********************************
 * JavaScript Scope Chain
 */
// var x = 'Hello!';
// first();

// function first(){
//     var y = 'Hi!';
//     second();

//     function second(){
//         var z = 'Hey!';
//         console.log(x + y + z);
//     }
// }















// //Example for differentiating execution stack and scope
// var x = 'Hello!';
// first();

// function first(){
//     var y = 'Hi!';
//     second();

//     function second(){
//         var z = 'Hey!';
//         third();
//     }
// }

// function third(){
//     var n = 'Mark';
//     console.log(x + n);
// }

//console.log(this);

// function greetings(){
//     console.log('Good Morning!')
//     console.log(this);
// }

// greetings();
/*********************************
 * JavaScript this keyword
 */
//console.log(this);

// function greetings(){
//     console.log('Good Morning.');
//     console.log(this);
// }

// greetings();
var person = {
    name: 'john',
    age: 28,

    greetings: function(){
        console.log('Good Morning');
        console.log(this);
    }
}

//person.greetings();

var user = {
    name: 'mark',
    age: 30
}

user.greetings = person.greetings;
user.greetings();





















































































































































































 


















































































































































































































































































































































































