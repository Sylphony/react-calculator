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
                        <CalculatorButton keyVal="7" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="8" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="9" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="4" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="5" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="6" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="1" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="2" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="3" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="0" click={ this.props.pressNum } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="." click={ this.props.pressDecimal } disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="±" click={ this.props.pressToggleSign } disableInput={ this.props.calculator.disableInput } />
                    </div>

                    <div className="calculator__buttons calculator__buttons--center clearfix column small-4">
                        <CalculatorButton keyVal="+" click={ this.props.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="-" click={ this.props.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="×" click={ this.props.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="÷" click={ this.props.pressOperation } customClass="calculator__button--operation" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="←" click={ this.props.pressBackspace } customClass="calculator__button--operation calculator__button--full" disableInput={ this.props.calculator.disableInput } />
                        <CalculatorButton keyVal="C" click={ this.props.pressClear } customClass="calculator__button--operation calculator__button--full" />
                    </div>

                    <div className="calculator__buttons calculator__buttons--right clearfix column small-2">
                       <CalculatorButton keyVal="=" click={ this.props.pressEqual } customClass="calculator__button--equal" disableInput={ this.props.calculator.disableInput } />
                    </div>
                </div>
            </div>
        ); 
    }
}

Calculator.propTypes = {
    calculator: React.PropTypes.object.isRequired
};

export default Calculator;
