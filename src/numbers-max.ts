const max = 0;
const numberArray = [4, 1, 7, 2, 13, 54, 98, 32, 1, 23, 54];
function checkMax (max, inputNum) {
    return (inputNum > max)? inputNum: max;
};

const numbersMax = (numberArray) => {
    return numberArray.reduce(checkMax,0)
};

console.log(numbersMax);

//export numbersMax;



