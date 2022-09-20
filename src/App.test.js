const App = require('./App');
import {fetchRedditData} from "./App";
import fetch from "node-fetch";
globalThis.fetch = fetch;

test('download Reddit data', () => {
    fetchRedditData().then(response => {
        expect(response).toBe(!null)
    })
});