const fetch = require('../src/features/fetch')

describe('Reddit data', () => {
    test('is downloaded', () => {
        fetch.fetchRedditData().then(response => {
            expect(response).not.toBeNull()
        })
    })
    test('is an object', () => {
        fetch.fetchRedditData().then(response => {
            expect(typeof response == 'object').toBe(true)
        })
    })
    // is valid
    // contains data
})