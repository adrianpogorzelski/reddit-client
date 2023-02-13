import 'jsdom-global/register'
import React from "react";
import {shallow} from "enzyme";
import "../../src/setupTests"
import Searchbar from "../../src/components/searchbar/searchbar";

let wrapper = shallow(<Searchbar/>)

describe('Component', () => {
    test('Renders main component', () => {
        expect(wrapper.find('#searchbar')).toHaveLength(1)

    })
    test('Renders a text field', () => {
        expect(wrapper.find('#searchText')).toHaveLength(1)
    })
    test('Renders a button', () => {
        expect(wrapper.find('#searchButton')).toHaveLength(1)
    })
})

describe('Clicking Search button', () => {
    test('Sends a fetch request with text field value as argument', () => {
        throw new Error( 'to be updated')
    })
})