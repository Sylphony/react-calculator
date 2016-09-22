import React from "react";
import classNames from "classnames";

class CalculatorButton extends React.Component {
    render() {
        let btnProp = {
            keyVal: this.props.keyVal,
            click: this.props.click || (() => {}),
            className: classNames(
                "calculator__button",
                "button",
                this.props.customClass
            )
        };

        return (
            <button className={ btnProp.className }
                    type="button" 
                    onClick={ btnProp.click.bind(null, btnProp.keyVal) }>    
                { btnProp.keyVal }
            </button>
        );
    }
}

export default CalculatorButton;
