import React from "react";
import AssistTableRow from "./AssistTableRow.jsx";

class AssistTable extends React.Component {
    render() {
        const keyFuncMap = {
            "0-9": "Numbers",
            "+": "Addition",
            "-": "Subtraction",
            "*": "Multiplication",
            "/": "Division",
            ".": "Decimal point",
            "F1": "Show assist table",
            "F8": "Toggle positive/negative sign",
            "ENTER / =": "Calculate",
            "BACKSPACE": "Backspace",
            "ESC": "Clear"
        };

        let AssistTableRowEles = [];

        for (let keyChar in keyFuncMap) {
            let keyProp = {
                keyChar: keyChar,
                keyFunc: keyFuncMap[keyChar]
            };

            AssistTableRowEles.push(
                <AssistTableRow key={ keyChar } { ...keyProp } />
            );
        }

        return (
            <table className="assist__table">
                <tbody>
                    { AssistTableRowEles }
                </tbody>
            </table>
        );
    }
}

export default AssistTable;
