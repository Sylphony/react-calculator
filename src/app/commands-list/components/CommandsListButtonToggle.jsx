import React from "react";

class CommandsListButtonToggle extends React.Component {
    render() {
        return (
            <button type="button" className="commands-list__btn-toggle" onClick={ this.props.click }>
                <span className="commands-list__btn-toggle-icon fa fa-keyboard-o"></span>
                <span className="commands-list__btn-toggle-text">Keyboard commands</span>
            </button>
        );
    }
}

export default CommandsListButtonToggle;
