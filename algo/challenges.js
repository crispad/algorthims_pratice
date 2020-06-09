/* Two Number Sum */


function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        const firstNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNumber = array[j];
            if (firstNumber + secondNumber === targetSum) {
                return [firstNumber, secondNumber];
            }
        }
    }
    return [];
}


/* Nth Fibonacci */

function getNthFib(n) {
    if (n === 2) {
        return 1;
    }else if (n === 1) {
        return 0;
    }else {
        return getNthFib(n-1) + getNthFib(n - 2);
    }
   }
  
   
/* Three Number Sum */

function threeNumberSum(array, targetSum) {
   array.sort((a, b) => a -b);
   const triple = [];
   for (let i = 0; i < array.length - 2; i++){
       let left = i + 1;
       let right = array.length - 1;
       while (left < right ) {
           const currentSum = array[i] + array[left] + array[right];
           if (currentSum === targetSum) {
               triple.push([array[i], array[left], array[right]]);
               left++;
               right--;
           }else if (currentSum < targetSum) {
               left++;
           }else if (currentSum > targetSum) {
               right--;
           }
       }
   }
   return triple
}
