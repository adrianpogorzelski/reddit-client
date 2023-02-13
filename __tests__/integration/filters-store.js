import Filters from "../../src/components/filters/filters";

describe('Filter list', () => {
    test('Is initially hidden', () => {
        expect(Filters.state.visibility).toEqual('hidden')
    })
    test('Contains 10 most popular subreddits', () => {
        throw new Error( 'to be updated')
    })
    test('r/popular is first on the list', () => {
        throw new Error( 'to be updated')
    })
})

describe('Clicking the filter button', () => {
    test('If hidden - Dispatches visibility == ""', () => {
        throw new Error( 'to be updated')
    })
    test('If visible - Dispatches visibility == "hidden"', () => {
        throw new Error( 'to be updated')
    })
})

describe('Clicking the filter options', () => {
    test('Updates state to current id, () => {
        throw new Error( 'to be updated')
    })