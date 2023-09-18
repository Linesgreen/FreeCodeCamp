let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // . - позволяет найти все вомзожные слова с сочетание um. По сути точка это любой символ который может быть.
let result = unRegex.test(exampleStr); // test выводит true or false в зависимости от того найдено совпадение или нет.

console.log(result);