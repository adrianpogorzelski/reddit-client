import 'jsdom-global/register'
import React from "react";
import "../src/setupTests"
import {mount, render, shallow} from "enzyme";
import App from "../src/app/App";

let wrapper = shallow(<App/>);

describe("Rendering", () => {
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
        // Tiles
            // Are rendered
            // 25 of them
    })
})