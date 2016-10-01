import React from "react";
import TestUtils from "react-addons-test-utils";
import CommandsListButtonToggle from "./CommandsListButtonToggle.jsx";
import { shallow, mount, render } from "enzyme";

describe("CommandsListButtonToggle component", function() {
    beforeEach(function() {
        let clickFunc = () => {
            console.log("CommandsListButtonToggle event");
        };

        this.wrapper = shallow(<CommandsListButtonToggle click={ clickFunc } />);
    });

    it("has a single button element", function() {
        let btnEle = this.wrapper.find(".commands-list__btn-toggle");

        expect(btnEle.length).toBe(1);
        expect(btnEle.is("button")).toBe(true);
    });

    it("has a single icon element", function() {
        let iconEle = this.wrapper.find(".commands-list__btn-toggle-icon");

        expect(iconEle.length).toBe(1);
    });

    it("has a text label", function() {
        let textEle = this.wrapper.find(".commands-list__btn-toggle-text");

        expect(textEle.length).toBe(1);
    });
});
