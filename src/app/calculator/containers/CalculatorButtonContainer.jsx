import React from "react";

class CalculatorButtonContainer extends React.Component {
    render() {
        return (
            <CalculatorButton num={ this.props.num } />
        );
    }
}

export default CalculatorButton;
