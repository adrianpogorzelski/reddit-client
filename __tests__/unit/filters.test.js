import 'jsdom-global/register'
import React from "react";
import {shallow} from "enzyme";
import "../../src/setupTests"
import Filters from "../../src/components/filters/filters";

const wrapper = shallow(<Filters/>)
const ul = wrapper.find('ul')

describe('Component', () => {
    test('Returns a nav element', () => {
        expect(wrapper.find('nav')).toHaveLength(1)
    })
    test('Has a list element', () => {
        expect(wrapper.find('ul')).toHaveLength(1)
    })
})

describe('Clicking the filter button', () => {
    test('If hidden - expand the list', () => {
        throw new Error( 'to be updated')

    })
    test('If expanded - hide the list', () => {
        throw new Error( 'to be updated')
    })
})

describe('Filter list', () => {
    test('Contains 10 most popular subreddits', () => {
        throw new Error( 'to be updated')
    })
    test('r/popular is first on the list', () => {
        throw new Error( 'to be updated')
    })
})

describe('Clicking a filter on the list', () => {
    test('Sends a fetch request with subreddit name', () => {
        throw new Error( 'to be updated')
    })
})
