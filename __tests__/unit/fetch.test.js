const fetch = require('../../src/features/fetch')

describe('Reddit data', () => {
    test('Filter buttons return corresponding objects', () => {
        fetch.fetchRedditData('AskReddit')
            .then(response => {
                expect(response.data.children[0].data.subreddit).toBe('AskReddit')
            })
    })
    test('non-existant subreddits return "Subreddit could not be found" string', () => {
        fetch.fetchRedditData('thisisarandomredditthatdoesnotexist')
            .then(response => {
                expect(response).toBe("Subreddit could not be found")
            })
    })
})