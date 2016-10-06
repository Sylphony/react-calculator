import React from "react";
import TestUtils from "react-addons-test-utils";
import { shallow } from "enzyme";
import CommandsList from "./CommandsList.jsx";

describe("CommandsList component", function() {
    beforeEach(function() {
        let mockProps = {
            commandsList: {
                showList: false
            },
            pressToggleCommandsList: function() {}
        };

        spyOn(mockProps, "pressToggleCommandsList");

        this.wrapper = shallow(<CommandsList { ...mockProps } />);
    });

    it("contains the CommandsListTable component", function() {
        let tableEle = this.wrapper.find("CommandsListTable");

        expect(tableEle.length).toBe(1);
    });
});
