import React, { PropTypes } from "react";
import CalculatorButton from "./CalculatorButton.jsx";

class Calculator extends React.Component {
    render() {
        return (
            <div className="row expanded">
                <span>{ this.props.result }</span>
                <span>{ this.props.inputNum }</span>
                <CalculatorButton num="7" click={ this.props.pressNum } />
                <CalculatorButton num="8" click={ this.props.pressNum } />
                <CalculatorButton num="9" click={ this.props.pressNum } />
                <CalculatorButton num="4" click={ this.props.pressNum } />
                <CalculatorButton num="5" click={ this.props.pressNum } />
                <CalculatorButton num="6" click={ this.props.pressNum } />
                <CalculatorButton num="1" click={ this.props.pressNum } />
                <CalculatorButton num="2" click={ this.props.pressNum } />
                <CalculatorButton num="3" click={ this.props.pressNum } />
                <button type="button" className="button" onClick={ this.props.add }>Add</button>
            </div>
        ); 
    }
}

export default Calculator;
