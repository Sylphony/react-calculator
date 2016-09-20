import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calculator from "./../components/Calculator.jsx";
import * as actionCreators from "./../actions/actionCreators";

class CalculatorContainer extends React.Component {
    render() {
        console.log("CalculatorContainer render");
        return (
            <Calculator result={ this.props.result }
                        add={ this.props.add }
                        subtract={ this.props.subtract }
                        press={ this.props.press } />
        );
    }
}

function mapStateToProps(state) {
    return {
        numbers: state.calculator.numbers,
        result: state.calculator.result
    };
}

function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
