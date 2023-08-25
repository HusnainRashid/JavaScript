const multiply = require('./multiply')

describe('multiply', () => {
    it('multiplies 5 and 5', () => {
        expect(5 * 5).toBe(25)
    })

    it('multiplies 10 and 10', () => {
        expect(10 * 10).toBe(100)
    })
})
