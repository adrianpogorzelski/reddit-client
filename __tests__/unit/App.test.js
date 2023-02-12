import 'jsdom-global/register'
import React from "react";
import "../../src/setupTests"
import {shallow} from "enzyme";
import App from "../../src/app/App";

let wrapper = shallow(<App/>);

describe("Main App component", () => {
    test("Renders", () => {
        expect(wrapper).toMatchSnapshot()
    })
})
describe("Components", () => {
    describe('Searchbar', () => {
        test("Renders", () => {
            expect(wrapper.find('Searchbar')).toHaveLength(1)
        })
    });
    describe('Filters', () => {
        test("Renders", () => {
            expect(wrapper.find('Filters')).toHaveLength(1)
        })
    });
})
describe('Reddit content section', () => {
    test("Renders", () => {
        expect(wrapper.find('#redditContent')).toHaveLength(1)
    })
})
describe('Footer', () => {
    test("Renders", () => {
        expect(wrapper.find('footer')).toHaveLength(1)
    })
})