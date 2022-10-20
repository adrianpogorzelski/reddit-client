const App = require('../src/App');
import {fetchRedditData} from "../src/App";
import fetch from "node-fetch";
globalThis.fetch = fetch;

describe('test', () => {
    test('download Reddit data', () => {
        fetchRedditData().then(response => {
            expect(typeof response == 'object').toBe(false)
        })
    })
})
