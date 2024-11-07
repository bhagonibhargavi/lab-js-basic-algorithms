// Iteration 1
let hacker1 = "John";
console.log("The driver's name is " + hacker1);

let hacker2 = "Alice";
console.log("The navigator's name is " + hacker2);

// Iteration 2
if (hacker1.length > hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3
let spacedUppercaseName = hacker1.toUpperCase().split("").join(" ");
console.log(spacedUppercaseName);

let reversedName = hacker2.split("").reverse().join("");
console.log(reversedName);

if (hacker1 < hacker2) {
   console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
   console.log("Yo, the navigator goes first definitely.");
} else {
   console.log("What?! You both have the same name?");
}
