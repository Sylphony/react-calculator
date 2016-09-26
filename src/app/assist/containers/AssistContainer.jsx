import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Assist from "./../components/Assist.jsx";
// import * as actionCreators from "./../actions/actionCreators";

class AssistContainer extends React.Component {
    render() {
        return (
            <Assist />
        );
    }
}

export default connect()(AssistContainer);
