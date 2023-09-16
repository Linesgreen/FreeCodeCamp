


function rangeOfNumbers(startNum, endNum) {
    
    if (startNum === endNum) {return [endNum]}
        else {
            const count = rangeOfNumbers(startNum + 1, endNum);
            count.unshift(startNum);
            return count;
        }
  };


console.log(rangeOfNumbers(33,33));