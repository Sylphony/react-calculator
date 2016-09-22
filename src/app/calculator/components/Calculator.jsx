import React, { PropTypes } from "react";
import CalculatorButton from "./CalculatorButton.jsx";
import CalculatorScreen from "./CalculatorScreen.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <div className="row expanded">
                    <CalculatorScreen calculator={ this.props.calculator } />

                    <div className="calculator__buttons calculator__buttons--left clearfix column small-6">
                        <CalculatorButton keyVal="7" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="8" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="9" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="4" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="5" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="6" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="1" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="2" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="3" click={ this.props.actions.pressNum } />
                        <CalculatorButton keyVal="0" click={ this.props.actions.pressNum } customClass="calculator__button--zero" />
                        <CalculatorButton keyVal="." click={ this.props.actions.pressDecimal } />
                    </div>

                    <div className="calculator__buttons calculator__buttons--center clearfix column small-4">
                        <CalculatorButton keyVal="+" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" />
                        <CalculatorButton keyVal="-" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" />
                        <CalculatorButton keyVal="×" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" />
                        <CalculatorButton keyVal="÷" click={ this.props.actions.pressOperation } customClass="calculator__button--operation" />
                        <CalculatorButton keyVal="±" click={ this.props.actions.pressToggleSign } customClass="calculator__button--operation" />
                        <CalculatorButton keyVal="C" click={ this.props.actions.pressClear } customClass="calculator__button--operation" />
                    </div>

                    <div className="calculator__buttons calculator__buttons--right clearfix column small-2">
                       <CalculatorButton keyVal="=" click={ this.props.actions.pressEqual } customClass="calculator__button--equal" />
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Calculator;
