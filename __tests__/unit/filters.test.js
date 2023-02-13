import 'jsdom-global/register'
import React from "react";
import {shallow} from "enzyme";
import "../../src/setupTests"
import Filters, {clickOption} from "../../src/components/filters/filters";

const wrapper = shallow(<Filters/>)

describe('Component', () => {
    test('Returns a nav element', () => {
        expect(wrapper.find('nav')).toHaveLength(1)
    })
    test('Has a button', () => {
        expect(wrapper.find('#filtersButton')).toHaveLength(1)
    })
    test('Has a list element', () => {
        expect(wrapper.find('ul')).toHaveLength(1)
    })
})

describe('Clicking a filter on the list', () => {
    test('Sends a valid action', () => {
        expect(clickOption('popular')).toEqual({"payload": "popular", "type": "subreddits/currentSubreddit"})
    })
    test('Sends a valid action', () => {
        wrapper.find('#popular').simulate('click')
        expect(clickOption()).toHaveBeenCalled()
    })
})
