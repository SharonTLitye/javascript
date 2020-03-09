// Writing a programe that helps people on what to wear based on weather condistions using the if, else and alternative conditions. Repeat the same exercise using the switch and break statements 
// sunny windy rainy snowy

// let weather = (prompt("Is today sunny, windy, rainy or snowy?"));
// if (weather === "sunny"){
//     console.log("So today is " + weather + " you say? Please put sunscreen!")
// } else if (weather === "rainy"){
//     console.log("So today is " + weather + " you say? Please grab a rain jacket and boots!")
// } else if (weather === "windy"){
//     console.log("So today is " + weather + " you say? A buttoned jacket and flat shoes will do.")
// } else if (weather === "snowy"){
//     console.log("So today is " + weather + " you say? Darling, stay at home and have hot coco.")
// } else {
//     console.log("Please enter the correct weather condition.")
// }

// Using switch and break statements
let weather = (prompt("Is today sunny, windy, rainy or snowy?"));

switch (weather) {case "sunny": console.log("put sunscreen!"); break; case "windy": console.log("wear jacket "); break; case "rainy": console.log("put rain jacket!"); break; case "snowy": console.log("stay home"); break; default: console.log("please enter the correct weather condition"); break;}