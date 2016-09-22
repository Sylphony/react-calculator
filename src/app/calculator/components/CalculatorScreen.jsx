import React from "react";
import classNames from "classnames";

class CalculatorScreen extends React.Component {
    render() {
        let [inputDisplayClasses, resultDisplayClasses] = [
            classNames(
                "calculator__screen-display",
                "calculator__screen-display--input",
                {
                    "hide": !this.props.calculatorInput.screenShow
                }
            ),

            classNames(
                "calculator__screen-display",
                "calculator__screen-display--result",
                {
                    "hide": !this.props.calculatorResult.screenShow
                }
            )
        ];

        return (
            <div className="calculator__screen">
                <span className={ inputDisplayClasses }>{ this.props.calculatorInput.inputNum }</span>
                <span className={ resultDisplayClasses }>{ this.props.calculatorResult.result }</span>
            </div>
        );
    }
}

export default CalculatorScreen;
