function hornerMethod(coefficients: number[], x: number): number {
  let result = 0;

  for (let i = coefficients.length - 1; i >= 0; i--) {
    result = result * x + coefficients[i];
  }

  return result;
}

const coefficients = [2, -1, 37]; // Współczynniki wielomianu 2x^2 - x + 3
const xValue = 2;
const result = hornerMethod(coefficients, xValue);

console.log(`Wartość wielomianu dla x = ${xValue}: ${result}`);