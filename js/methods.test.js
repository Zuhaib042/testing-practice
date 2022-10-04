import compute, { stringLength, reverseString, wordCap } from './methods.js';

describe('Strings Manipulation', () => {
  test('checks the length of the string', () => {
    // arrange
    const str = 'zuhaibAmja';
    // act
    const length = 10;
    // assert
    expect(stringLength(str)).toBe(length);
  }),
    test('check if the string has been reversed successfully', () => {
      expect(reverseString('hello')).toBe('olleh');
    });
});

describe('capitalization', () => {
  test('checks if the word if capitalized or not', () => {
    expect(wordCap('zuhaib')).toBe('Zuhaib');
  });
});

describe('addition', () => {
  test('checks if 2 + 2 is 4', () => {
    expect(compute.add(2, 2)).toBe(4);
  }),
    test('checks if 10 + 10 is 20', () => {
      expect(compute.add(10, 10)).toBe(20);
    }),
    test('checks if 100 + 100 is 200', () => {
      expect(compute.add(100, 100)).toBe(200);
    });
});

describe('subtraction', () => {
  test('checks if 2 - 2 is 0', () => {
    expect(compute.subtract(2, 2)).toBe(0);
  }),
    test('checks if 10 - 6 is 4', () => {
      expect(compute.subtract(10, 6)).toBe(4);
    }),
    test('checks if 188 - 88 is 100', () => {
      expect(compute.subtract(188, 88)).toBe(100);
    });
});

describe('divide', () => {
  test('checks if 10 / 2 is 5', () => {
    expect(compute.divide(10, 2)).toBe(5);
  }),
    test('checks if 90 / 6 is 15', () => {
      expect(compute.divide(90, 6)).toBe(15);
    }),
    test('checks if 110 / 11 is 10', () => {
      expect(compute.divide(110, 11)).toBe(10);
    });
});

describe('multiply', () => {
  test('checks if 10 * 2 is 20', () => {
    expect(compute.multiply(10, 2)).toBe(20);
  }),
    test('checks if 90 * 5 is 450', () => {
      expect(compute.multiply(90, 5)).toBe(450);
    }),
    test('checks if 1000 * 50', () => {
      expect(compute.multiply(1000, 50)).toBe(50000);
    });
});
