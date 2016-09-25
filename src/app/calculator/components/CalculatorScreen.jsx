import React from "react";
import classNames from "classnames";

class CalculatorScreen extends React.Component {
    render() {
        let [operationClasses, inputDisplayClasses, resultDisplayClasses] = [
            classNames(
                "calculator__screen-operation",
                {
                    "hide": !this.props.calculator.operation
                }
            ),

            classNames(
                "calculator__screen-display",
                "calculator__screen-display--input",
                {
                    "hide": this.props.calculator.screen !== "input"
                }
            ),

            classNames(
                "calculator__screen-display",
                "calculator__screen-display--result",
                {
                    "hide": this.props.calculator.screen !== "result"
                }
            )
        ];

        return (
            <div className="calculator__screen">
                <span className={ operationClasses }>{ this.props.calculator.operation }</span>
                <span className={ inputDisplayClasses }>{ this.props.calculator.inputNum }</span>
                <span className={ resultDisplayClasses }>{ this.props.calculator.result }</span>
            </div>
        );
    }
}

CalculatorScreen.propTypes = {
    calculator: React.PropTypes.object.isRequired
};

export default CalculatorScreen;
