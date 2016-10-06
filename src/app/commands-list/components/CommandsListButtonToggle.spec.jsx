import React from "react";
import TestUtils from "react-addons-test-utils";
import { shallow } from "enzyme";
import CommandsListButtonToggle from "./CommandsListButtonToggle.jsx";

describe("CommandsListButtonToggle component", function() {
    beforeEach(function() {
        let mockEvents = {
            clickFunc: function() {}
        };

        // Watch over the click function for later simulation calls
        spyOn(mockEvents, "clickFunc");

        this.wrapper = shallow(<CommandsListButtonToggle click={ mockEvents.clickFunc } />);
    });

    it("has a single button element", function() {
        let btnEle = this.wrapper.find(".commands-list__btn-toggle");

        expect(btnEle.length).toBe(1);
        expect(btnEle.is("button")).toBe(true);
    });

    it("has a single icon element", function() {
        let iconEle = this.wrapper.find(".commands-list__btn-toggle-icon");

        expect(iconEle.length).toBe(1);
        expect(iconEle.hasClass("fa")).toBe(true);
    });

    it("has a text label", function() {
        let textEle = this.wrapper.find(".commands-list__btn-toggle-text");

        expect(textEle.length).toBe(1);
    });

    it("has a working click event on button", function() {
        let btnEle = this.wrapper.find(".commands-list__btn-toggle");

        expect(btnEle.prop("onClick")).not.toBe("undefined");
        
        btnEle.simulate("click");
        expect(btnEle.prop("onClick")).toHaveBeenCalled();
    });
});
