export const findfactors = (numberArray: number[], factor: number) => {
    const checkFactor = (inputNum: number) => {
        return (inputNum % factor) == 0
    }
    return numberArray.filter(checkFactor)
};
