"use strict";

let lipstick = {
    type: "matte",
    color: "red",
    brand: "Mac",
    store: "Edgars"
};

// console.log(lipstick.type);
// console.log(lipstick.color);
// console.log(lipstick.brand);
// console.log("Get yourself a" +lipstick.color+ lipstick.type+ lipstick.brand+ "lipstick, Honey!");


// let cake ={
//     type: "ice cream",
//     flavour: "rum & raisin",
//     price: "R120",
//     layers: "2",
//     decor: "5 sparklers",
//     occasion:"beach party",
//     date:"28 Nov 2020"
// };
// console.log("Sharon has ordered an " +cake.type+ " made with " +cake.flavour+ " costing " +cake.price+ +);
// // changing of occasion
// cake.occasion = "wedding";

// Adding functions and methods to  objects

// function describe(cake){
//     var description = "The " +lipstick.brand+ " has a " +lipstick.color+ " color, it is " +lipstick.type+ " and is available at any " +lipstick.store;  
//     return description;
// }

// console.log(describe(lipstick));

//putting everything together
let movies ={
    name: "Highschool Musical 1",
    genre: "musical",
    year: "2011",
    length: "90 minutes",
    describe: function(){
        var description = "The " +this.length+ " long movie is a " +this.genre+ " that was created in the year " +this.year+ " and is called " +this.name+ ".";
        return description;
    },
    color: "red"
};

console.log(movies.describe(), movies.color);
console.log(movies.color);

// Own Exercise

let student ={
    name: "Sharon",
    course: "web development",
    year: "2019",
    duration: "6 months",
    gender: "female",
    describe: function(){
        var description = this.name+ " is a " +this.gender+  " who is doing a " +this.course+ " course for the year, " +this.year+ " for " +this.duration+ ".";
        return description;   
    },

};

console.log(student.describe());