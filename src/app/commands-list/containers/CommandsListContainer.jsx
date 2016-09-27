import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CommandsList from "./../components/CommandsList.jsx";
// import * as actionCreators from "./../actions/actionCreators";

class CommandsListContainer extends React.Component {
    render() {
        return (
            <CommandsList />
        );
    }
}

export default connect()(CommandsListContainer);
