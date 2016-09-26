import React from "react";
import classNames from "classnames";

class AssistButtonToggle extends React.Component {
    render() {
        return (
            <button type="button" className="assist__btn-toggle">
                <span className="assist__btn-toggle-icon fa fa-keyboard-o"></span>
                <span className="assist__btn-toggle-text">Keyboard commands</span>
            </button>
        );
    }
}

export default AssistButtonToggle;
