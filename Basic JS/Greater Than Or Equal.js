// Применение сравнения больше или равно с if

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  console.log(testGreaterOrEqual(0));
  console.log(testGreaterOrEqual(20));
  console.log(testGreaterOrEqual(100));