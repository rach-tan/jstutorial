
export const numbersSum = (inputnumbers: number[]) => {
  let total = 0;
  for (const i of inputnumbers) {
    total += i;
  }
  return total;
};
