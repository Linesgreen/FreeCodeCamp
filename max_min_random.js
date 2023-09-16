// Функция вернет рандомное числов в диапазоне который я указал
// Math.floor - округлят число так как Math.random генерирует число в диапазоне (0-1);    


function randomRange(myMin, myMax) {
    return Math.floor(Math.random()*(myMax-myMin+1)+myMin);
  }


console.log(randomRange(10,15));