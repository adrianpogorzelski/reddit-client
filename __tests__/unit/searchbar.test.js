import 'jsdom-global/register'
import React from "react";
import {shallow} from "enzyme";
import "../../src/setupTests"
import Searchbar from "../../src/components/searchbar/searchbar";

let wrapper = shallow(<Searchbar/>)

describe('Component', () => {
    test('Renders a text field', () => {
        throw new Error( 'to be updated')
    })
    test('Renders a button', () => {
        throw new Error( 'to be updated')
    })
})

describe('Clicking Search button', () => {
    test('Sends a fetch request with text field value as argument', () => {
        throw new Error( 'to be updated')
    })
})