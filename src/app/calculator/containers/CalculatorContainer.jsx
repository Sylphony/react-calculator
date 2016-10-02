import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./../actions/actionCreators";
import Calculator from "./../components/Calculator.jsx";
import calculatorKeyboard from "./functions/calculatorKeyboard";

class CalculatorContainer extends React.Component {
    constructor() {
        super();

        // Handler for keyboard event listener
        this.calculatorKeyboardHandler = (e) => {
            calculatorKeyboard(e, this.props);
        };
    }

    render() {
        const actions = {
            pressNum: this.props.pressNum,
            pressBackspace: this.props.pressBackspace,
            pressDecimal: this.props.pressDecimal,
            pressToggleSign: this.props.pressToggleSign,
            pressOperation: this.props.pressOperation,
            pressEqual: this.props.pressEqual,
            pressClear: this.props.pressClear
        };

        return (
            <Calculator calculator={ this.props.calculator }
                        actions={ actions } />
        );
    }

    componentDidMount() {
        window.addEventListener("keydown", this.calculatorKeyboardHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.calculatorKeyboardHandler);
    }
}

/**
 * Map state reducers to props.
 */
function mapStateToProps(state) {
    return {
        calculator: state.calculator
    };
}

/**
 * Map dispatch events to props.
 */
function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
