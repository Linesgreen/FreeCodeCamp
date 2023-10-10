// Explore Differences Between the var and let Keywords
var camper = "James";
var camper = "David";
console.log(camper);

let camperZ  = "James_1"; 
let camperX  = "David_1"; // Не возможно использовать 'camperZ', компилятор выдает ошибку.
console.log(camperZ);

// При использовании var можно перезаписывать значение переменной путем объявлние этой же переменной с новым знчением (плюсы использования var пока не ясны)
// При использовании let нельзя объявлять одну и ту же переменную. Это позволяет не запутаться в больших программах.