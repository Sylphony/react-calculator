import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./../actions/actionCreators";
import CommandsList from "./../components/CommandsList.jsx";
import commandsListKeyboard from "./functions/commandsListKeyboard";

class CommandsListContainer extends React.Component {
    constructor() {
        super();

        // Handler for keyboard event listener
        this.commandsListKeyboardHandler = (e) => {
            commandsListKeyboard(e, this.props);
        };
    }

    render() {
        return (
            <CommandsList { ...this.props } />
        );
    }

    componentDidMount() {
        window.addEventListener("keydown", this.commandsListKeyboardHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.commandsListKeyboardHandler);
    }
}

/**
 * Map state reducers to props.
 */
function mapStateToProps(state) {
    return {
        commandsList: state.commandsList
    };
}

/**
 * Map dispatch events to props.
 */
function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandsListContainer);
