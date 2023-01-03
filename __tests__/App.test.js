import 'jsdom-global/register'
import React from "react";
import "../src/setupTests"
import {mount} from "enzyme";


describe("App", () => {
    describe("Main DOM element", () => {
        test("Is rendered", () => {
            const AppContainer = import('../src/app/App').default
            const wrapper = mount(<AppContainer />)
            expect(wrapper.find('client-for-reddit')).toExist()
        })
    })
})
