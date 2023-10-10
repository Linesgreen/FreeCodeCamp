// используя .match находим указанное слово в предложение и возвращаем само это слово 



let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi // g - выводит все повторения в предложении, i - регистр не учитывается ;
let result = twinkleStar; // Change this line

result = twinkleStar.match(starRegex);
console.log(result);

