import React from "react";
import CommandsListTableRow from "./CommandsListTableRow.jsx";

class CommandsListTable extends React.Component {
    render() {
        const keyFuncMap = {
            "0-9": "Numbers",
            "+": "Addition",
            "-": "Subtraction",
            "*": "Multiplication",
            "/": "Division",
            ".": "Decimal point",
            "F1": "Show keyboard commands table",
            "F8": "Toggle positive/negative sign",
            "ENTER / =": "Calculate",
            "BACKSPACE": "Backspace",
            "ESC": "Clear"
        };

        let CommandsListTableRowEles = [];

        for (let keyChar in keyFuncMap) {
            let keyProp = {
                keyChar: keyChar,
                keyFunc: keyFuncMap[keyChar]
            };

            CommandsListTableRowEles.push(
                <CommandsListTableRow key={ keyChar } { ...keyProp } />
            );
        }

        return (
            <table className="commands-list__table">
                <tbody>
                    { CommandsListTableRowEles }
                </tbody>
            </table>
        );
    }
}

export default CommandsListTable;
