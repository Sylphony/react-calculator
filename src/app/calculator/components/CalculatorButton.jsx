import React from "react";
import classNames from "classnames";

class CalculatorButton extends React.Component {
    render() {
        let btnProp = {
            num: this.props.num,
            click: this.props.click || null,
            className: classNames(
                "calculator__button",
                "button",
                this.props.customClass
            )
        };

        return (
            <button className={ btnProp.className }
                    type="button" 
                    onClick={ btnProp.click.bind(null, btnProp.num) }>    
                { btnProp.num }
            </button>
        );
    }
}

export default CalculatorButton;
