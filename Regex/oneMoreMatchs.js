let difficultSpelling = "Mississippis";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);
//console.log(result);


// Only change code below this line
let chewieQuote= "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result1 = chewieQuote.match(chewieRegex);
//console.log(result1);


let text = "<h1>Winter is coming</h1>";
let myRegex3 = /<.*?>/gi; // it's the answer!
let result3 = text.match(myRegex3);
console.log(result3)


