import React, { PropTypes } from "react";
import CalculatorButton from "./CalculatorButton.jsx";
import CalculatorScreen from "./CalculatorScreen.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <div className="row expanded">
                    <CalculatorScreen screen={ this.props.calculator.screen } />
                    <CalculatorButton num="7" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="8" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="9" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="4" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="5" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="6" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="1" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="2" click={ this.props.actions.pressNum } />
                    <CalculatorButton num="3" click={ this.props.actions.pressNum } />
                    <button type="button" className="button" onClick={ this.props.actions.add }>Add</button>
                </div>
            </div>
        ); 
    }
}

export default Calculator;
