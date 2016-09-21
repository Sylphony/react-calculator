import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calculator from "./../components/Calculator.jsx";
import * as actionCreators from "./../actions/actionCreators";

class CalculatorContainer extends React.Component {
    render() {
        const actions = {
            pressOperation: this.props.pressOperation,
            pressAdd: this.props.pressAdd,
            pressSubtract: this.props.pressSubtract,
            pressMultiply: this.props.pressMultiply,
            pressDivide: this.props.pressDivide,
            pressEqual: this.props.pressEqual,
            pressNum: this.props.pressNum
        };

        return (
            <Calculator calculator={ this.props.calculator }
                        actions={ actions } />
        );
    }
}

function mapStateToProps(state) {
    return {
        calculator: state.calculator
    };
}

function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
