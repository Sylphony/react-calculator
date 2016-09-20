import React from "react";

class CalculatorButton extends React.Component {
    render() {
        let btnProp = {
            num: this.props.num,
            click: this.props.click || null
        };

        return (
            <button type="button" className="button" onClick={ btnProp.click.bind(null, parseInt(btnProp.num)) }>{ btnProp.num }</button>
        );
    }
}

export default CalculatorButton;
