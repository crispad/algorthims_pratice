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

/* Product Sum */

function productSum(array, multiplier = 1){
    let sum = 0;
    for(const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        }else {
            sum += element;
        }
    }
    return sum * multiplier;
}


// /* Nth Fibonacci */

// function getNthFib(n) {
//     if (n === 2) {
//         return 1;
//     }else if (n === 1) {
//         return 0;
//     }else {
//         return getNthFib(n - 1) + getNthFib(n - 2);
//     }
// }


/* Four Number Sum */

function fourNumbersSum(array, targetSum) {
    const allPairSums = {}
    const quadruplets = []
    for (let i = 1; i < array.length - 1; i++) {
        for(let j = 1; j < array.length; j++) {
            const currentSum = array[i] + array[j];
            const difference = targetSum - currentSum;
            if (difference in allPairSums) {
                for (const pair of allPairSums[difference]) {
                    quadruplets.push(pair.concat([array[i], array[j]]));
                }
            }
        }
        for (let k = 0; k < i; k++) {
            const currentSum = array[i] + array[k];
            if (!(currentSum in allPairSums)) {
                allPairSums[currentSum] = [[array[k], array[i]]];
            }else {
                allPairSums[currentSum].push([array[k], array[i]]);
            }
        }
    }
    return quadruplets;
}