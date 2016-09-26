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
            ),
            disableInput: this.props.disableInput
        };

        return (
            <button className={ btnProp.className }
                    type="button" 
                    onClick={ btnProp.click.bind(null, btnProp.keyVal) }
                    disabled={ btnProp.disableInput }>    
                { btnProp.keyVal }
            </button>
        );
    }
}

CalculatorButton.propTypes = {
    keyVal: React.PropTypes.string.isRequired,
    click: React.PropTypes.func,
    customClass: React.PropTypes.string
};

export default CalculatorButton;
