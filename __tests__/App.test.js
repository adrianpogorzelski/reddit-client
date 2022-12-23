const App = require('../src/app/App');
import {fetchRedditData} from "../src/app/store";

describe('Reddit data', () => {
    describe('Popular', () => {
        test('is downloaded', () => {
            fetchRedditData().then(response => {
                expect(response).not.toBeNull()
            })
        })
        test('is an object', () => {
            fetchRedditData().then(response => {
                expect(typeof response == 'object').toBe(true)
            })
        })
    })
})
