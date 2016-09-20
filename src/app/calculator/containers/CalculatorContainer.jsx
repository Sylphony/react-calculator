import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calculator from "./../components/Calculator.jsx";
import * as actionCreators from "./../actions/actionCreators";

class CalculatorContainer extends React.Component {
    render() {
        console.log("CalculatorContainer render");
        return (
            <Calculator num={this.props.num} onAdd={ () => this.props.add(1, 5) } />
        );
    }
}

function mapStateToProps(state) {
    return {
        num: state.calculator.num
    };
}

function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
