const max = 0;
const numberArray = [2, 3, 4, 6, 9, 10, 11];
const factor = 3;
function checkFactor (inputNum) {
    return (inputNum % factor) == 0
};

const findfactors = () => {
    return numberArray.filter(checkFactor)
};

console.log(numbersMax);

//export numbersMax;