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

twoNumberSum([1, 2, 5, 5, 1], 10);
