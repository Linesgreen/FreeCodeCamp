// В зависимости от переданого значения в функцию срабатывает определенная строка (case)
// break в конце нужен для прерывания выполнения функции.

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";

    // default используется для значений которые не подошли под case которые я указал.

    default:
      answer = "another";
  }

  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
