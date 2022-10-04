const stringLength = (str) => {
  if (str.length >= 1 && str.length <= 10) {
    return str.length;
  }
};

const reverseString = (str) => {
  let reversed = str.split('').reverse().join('');
  return reversed;
};

export default class Calculator {
  static add = (a, b) => {
    return a + b;
  };
  static subtract = (a, b) => {
    return a - b;
  };
  static divide = (a, b) => {
    return a / b;
  };
  static multiply = (a, b) => {
    return a * b;
  };
}

export const wordCap = (str) => {
  const capital = str.charAt(0).toUpperCase() + str.slice(1);
  return capital;
};

export { stringLength, reverseString };
