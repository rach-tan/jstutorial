//const max = 0;
//const numberArray = [4, 1, 7, 2, 13, 54, 98, 32, 1, 23, 54];
const checkMax = (max: number, inputNum: number) => (inputNum > max) ? inputNum : max;

export const numbersMax = (numberArray: number[]) => {
    return numberArray.reduce(checkMax, 0)
};
