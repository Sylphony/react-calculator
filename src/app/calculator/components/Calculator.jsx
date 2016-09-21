import React, { PropTypes } from "react";
import CalculatorButton from "./CalculatorButton.jsx";
import CalculatorScreen from "./CalculatorScreen.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <div className="row expanded">
                    <CalculatorScreen screen={ this.props.calculator.screen } />

                    <div className="calculator__buttons calculator__buttons--left clearfix column small-6">
                        <CalculatorButton num="7" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="8" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="9" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="4" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="5" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="6" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="1" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="2" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="3" click={ this.props.actions.pressNum } />
                        <CalculatorButton num="0" click={ this.props.actions.pressNum } customClass="calculator__button--zero" />
                    </div>

                    <div className="calculator__buttons calculator__buttons--center clearfix column small-4">
                        <CalculatorButton num="+" click={ this.props.actions.add } customClass="calculator__button--operation" />
                        <CalculatorButton num="-" click={ this.props.actions.subtract } customClass="calculator__button--operation" />
                        <CalculatorButton num="x" click={ this.props.actions.multiply } customClass="calculator__button--operation" />
                        <CalculatorButton num="/" click={ this.props.actions.divide } customClass="calculator__button--operation" />
                    </div>

                    <div className="calculator__buttons calculator__buttons--right clearfix column small-2">
                        <CalculatorButton num="=" click={ this.props.actions.equal } customClass="calculator__button--equal" />
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Calculator;
