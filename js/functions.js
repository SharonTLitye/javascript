'user strict'
// function sayHello(){
//     console.log('Hello');
// }
// sayHello();

// function sayHi(){
//     return "Hi Sharon!";
// }
// let result = sayHi();
// console.log(result);


function sayHello(name, surname, age){
    var message = "Hello " +name+ " " +surname +  ", You are " + age +  " years young!";
    return message;
}
let name = prompt("Please enter name:")
let surname = prompt("Please enter surname:")
let age = prompt("Please enter age:")
console.log(sayHello(name, surname, age))