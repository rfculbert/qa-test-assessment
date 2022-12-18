const {shuffleArray} = require('./utils')
const testArr = ['botOne', 'botTwo', 'botThree', 'botFour', 'botFive', 'botSix', 'botSever']
describe('shuffleArray should', () => {
    let results = shuffleArray(testArr)
    test (`shuffleArray should return an array`, () => {
       expect(results.length).toBe(7)
    })
   
    test (`shuffleArray should contain botTwo`, () => {
        expect(results).toContain('botTwo')
    })
  
})