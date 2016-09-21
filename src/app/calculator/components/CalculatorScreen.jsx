import React from "react";

class CalculatorScreen extends React.Component {
    render() {
        return (
            <div className="calculator__screen">
                <span>{ this.props.screen }</span>
            </div>
        );
    }
}

export default CalculatorScreen;
