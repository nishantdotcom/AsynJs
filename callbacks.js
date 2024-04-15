/*Callbacks are the function that take another function as an arguments. 
 
1. callbacks maninly  used in asyn calls
2. callbacks are used in Web Apis , like settimeout, fetch setintervals etc.
3. callbacks   created callback hell which causes problems
*/

function Greet(name, GreetHim) {
  GreetHim(name);
}

function GreetHim(name) {
  console.log(`Hello  ${name} !!!!`);
}
// this function take two inputs  name and a function  so this function is called as callbacks
Greet("nishant", GreetHim);
