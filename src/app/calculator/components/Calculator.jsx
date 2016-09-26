import React from "react";
import CalculatorButton from "./CalculatorButton.jsx";
import CalculatorScreen from "./CalculatorScreen.jsx";

class Calculator extends React.Component {
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
        // A lookup object to see which key type is pressed
        const keyLookup = {
            num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            decimal: ["."],
            operation: ["+", "-", "*", "/"],
            equal: ["=", "Enter"],
            toggleSign: ["F9"],
            backspace: ["Backspace"],
            clear: ["Escape"]
        };

        window.addEventListener("keydown", (e) => {
            e.preventDefault(); // Stop any events that may be triggered as a result of button focus (e.g. pressing enter while button is focused from clicking)

            // Only allow input as long the calculator has not run into an error
            if (!this.props.calculator.disableInput) {
                let keyChar = e.key;

                // If it is a number key
                if (keyLookup.num.indexOf(keyChar) > -1) {
                    this.props.actions.pressNum(keyChar);
                }

                // If it is a decimal key
                else if (keyLookup.decimal.indexOf(keyChar) > -1) {
                    this.props.actions.pressDecimal();
                }

                // If it is the F9 key (for toggle sign)
                else if (keyLookup.toggleSign.indexOf(keyChar) > -1) {
                    this.props.actions.pressToggleSign();
                }

                // If it is an operation key
                else if (keyLookup.operation.indexOf(keyChar) > -1) {
                    // Convert multi/div keys to usage variant
                    if (keyChar === "*") keyChar = "×";
                    if (keyChar === "/") keyChar = "÷";

                    this.props.actions.pressOperation(keyChar);
                }

                // If equal sign or enter key
                else if (keyLookup.equal.indexOf(keyChar) > -1) {
                    this.props.actions.pressEqual();
                }

                // If backspace key is pressed
                else if (keyLookup.backspace.indexOf(keyChar) > -1) {
                    this.props.actions.pressBackspace();
                }

                // If ESC is pressed
                else if (keyLookup.clear.indexOf(keyChar) > -1) {
                    this.props.actions.pressClear();
                }
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener("keydown");
    }
}


Calculator.propTypes = {
    actions: React.PropTypes.object.isRequired,
    calculator: React.PropTypes.object.isRequired
};

export default Calculator;
