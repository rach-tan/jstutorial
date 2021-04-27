export const findFactors = (numberArray: number[], factor: number) => {
    const checkFactor = (inputNum: number) => inputNum % factor == 0;
    return numberArray.filter(checkFactor)
};
