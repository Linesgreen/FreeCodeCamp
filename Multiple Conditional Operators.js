// объединение несколькоих if в скоращенной форме записи



function checkSign(num) {
    return (num == 0) ? "zero"
        : (num > 0) ? "positive"
        : "negative" ;
    }
    
    console.log(checkSign(10));