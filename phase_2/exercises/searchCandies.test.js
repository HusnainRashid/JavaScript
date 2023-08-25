const searchCandies = require('./searchCandies')

describe('searchcandies list', () => {
    it('returns only the ones under 3', () => {
        expect(searchCandies(3)).toEq(['Aero', 'Skitties', 'Mars', 'Skittles', 'Ricola'])
    })
    // it('returns the Mars bar only', () => {
    //     expect(searchCandies('Ma', 2)).toEq([ 'Mars' ]);
    // });

    // it('returns 2 candies', () => {
    //     expect(searchCandies('Ma', 10)).toEq([ 'Mars', 'Maltesers' ]);
    // });

    // it('returns 3 candies', () => {
    //     expect(searchCandies('S', 10)).toEq([ 'Skitties', 'Skittles', 'Starburst' ]);
    // });

    // it('returns "S" candies', () => {
    //     expect(searchCandies('S', 4)).toEq([ 'Skitties', 'Skittles' ]);
    // });
})
