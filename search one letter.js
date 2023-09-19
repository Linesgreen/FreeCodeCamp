// Ищем буквы в предложении



let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; //  ищем все символы что есть в евадратных скобках
let result = quoteSample.match(vowelRegex); 

console.log(result);