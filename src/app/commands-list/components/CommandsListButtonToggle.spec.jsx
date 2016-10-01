import React from "react";
import TestUtils from "react-addons-test-utils";
import CommandsListButtonToggle from "./CommandsListButtonToggle.jsx";

describe("CommandsListButtonToggle component", function() {
    beforeEach(function() {
        let clickFunc = () => {
            console.log("CommandsListButtonToggle event");
        };

        this.component = TestUtils.renderIntoDocument(<CommandsListButtonToggle click={ clickFunc } />);
    });

    it("has all button props", function() {
        let button = TestUtils.findRenderedDOMComponentWithTag(this.component, "button");

        // TestUtils.Simulate.click(button);

        expect(button.type).toBe("button");
        expect(button.className).toBe("commands-list__btn-toggle button");
    });
});
