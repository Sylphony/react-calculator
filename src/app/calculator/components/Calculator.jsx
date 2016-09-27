import React from "react";
import CalculatorButton from "./CalculatorButton.jsx";
import CalculatorScreen from "./CalculatorScreen.jsx";
import calculatorKeyboard from "./functions/calculatorKeyboard";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        // Handler for keyboard event listener
        this.calculatorKeyboardHandler = function(e) {
            calculatorKeyboard(e, props);
        };
    }

    render() {
        return (
            <div className="calculator">
                <div className="row expanded">
                    <CalculatorScreen calculator={ this.props.calculator } />

                    <div className="calculator__buttons calculator__buttons--left clearfix column small-6">
                        <CalculatorButton keyVal="7" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="8" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="9" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="4" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="5" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="6" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="1" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="2" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="3" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="0" click={ this.props.actions.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="." click={ this.props.actions.pressDecimal } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="±" click={ this.props.actions.pressToggleSign } disableInput={ this.props.calculator.disableInput } />
                    </div>

                    <div className="calculator__buttons calculator__buttons--center clearfix column small-4">
                        <CalculatorButton keyVal="+" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="-" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="×" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="÷" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="←" click={ this.props.actions.pressBackspace } customClass="calculator__button--operation calculator__button--full" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="C" click={ this.props.actions.pressClear } customClass="calculator__button--operation calculator__button--full" />
                    </div>

                    <div className="calculator__buttons calculator__buttons--right clearfix column small-2">
                       <CalculatorButton keyVal="=" click={ this.props.actions.pressEqual } customClass="calculator__button--equal" disableInput={ this.props.calculator.disableInput } />
                    </div>
                </div>
            </div>
        ); 
    }

    componentDidMount() {
        window.addEventListener("keydown", this.calculatorKeyboardHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.calculatorKeyboardHandler);
    }
}


Calculator.propTypes = {
    actions: React.PropTypes.object.isRequired,
    calculator: React.PropTypes.object.isRequired
};

export default Calculator;
