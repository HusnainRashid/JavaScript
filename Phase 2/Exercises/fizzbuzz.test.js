const fizzBuzz = require('./fizzbuzz')

describe('fizzBuzz', () => {
    it('returns fizz 8', () => {
        expect(fizzBuzz(8)).toBe(8)
    });

    it('returns FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });
});
