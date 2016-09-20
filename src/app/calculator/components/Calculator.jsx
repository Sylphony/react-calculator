import React, { PropTypes } from "react";
import CalculatorButton from "./CalculatorButton.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="row expanded">
                <span>{ this.props.result }</span>
                <span>{ this.props.numbers }</span>
                <CalculatorButton num="7" click={ this.props.press } />
                <CalculatorButton num="8" click={ this.props.press } />
                <CalculatorButton num="9" click={ this.props.press } />
                <CalculatorButton num="4" click={ this.props.press } />
                <CalculatorButton num="5" click={ this.props.press } />
                <CalculatorButton num="6" click={ this.props.press } />
                <CalculatorButton num="1" click={ this.props.press } />
                <CalculatorButton num="2" click={ this.props.press } />
                <CalculatorButton num="3" click={ this.props.press } />
                <button type="button" className="button" onClick={ this.props.add }>Add</button>
            </div>
        ); 
    }
}

export default Calculator;
