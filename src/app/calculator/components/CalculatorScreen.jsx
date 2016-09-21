import React from "react";

class CalculatorScreen extends React.Component {
    render() {
        return (
            <div className="calculator__screen">
                <span className="calculator__screen-display">{ this.props.screen }</span>
            </div>
        );
    }
}

export default CalculatorScreen;
