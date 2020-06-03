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
   
