import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CommandsList from "./../components/CommandsList.jsx";
import * as actionCreators from "./../actions/actionCreators";

class CommandsListContainer extends React.Component {
    render() {
        const actions = {
            pressToggleCommandsList: this.props.pressToggleCommandsList
        };

        return (
            <CommandsList commandsList={ this.props.commandsList }
                          actions={ actions } />
        );
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
