// работаем с вложенными массивами
// Находим сумму всех значений во всех вложенных масивах в массив



function multiplyAll(arr) {
    let product = 0;
    // Only change code below this line
  for (let i = 0 ; i < arr.length; i++) {
    for (let y = 0; y<arr[i].length; y++)
    {
    //   product = arr[i][y]+product;                            // Попытка дебага и поиска на какой стадии вылазила ошибка
    //  console.log(arr[i][y]); console.log("--" + product);
      
      }
  }
    
    console.log(product);
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) 