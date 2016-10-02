// A lookup object to see which key type is pressed
const keyLookup = {
    num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    decimal: ["."],
    operation: ["+", "-", "*", "/"],
    equal: ["=", "Enter"],
    toggleSign: ["F9"],
    backspace: ["Backspace"],
    clear: ["Escape"]
};

/**
 * Keyboard event callback for calculator.
 * @param e: Event (keydown).
 * @param props: The component's properties.
 */
function calculatorKeyboard(e, props) {
    // Stop any events that may be triggered as a result of button focus (e.g. pressing enter while button is focused from clicking)
    e.preventDefault();

    let keyChar = e.key;

    // If ESC is pressed
    if (keyLookup.clear.indexOf(keyChar) > -1) {
        props.pressClear();
    }

    // Only allow input as long the calculator has not run into an error
    if (!props.calculator.disableInput) {
        // If it is a number key
        if (keyLookup.num.indexOf(keyChar) > -1) {
            props.pressNum(keyChar);
        }

        // If it is a decimal key
        else if (keyLookup.decimal.indexOf(keyChar) > -1) {
            props.pressDecimal();
        }

        // If it is the F9 key (for toggle sign)
        else if (keyLookup.toggleSign.indexOf(keyChar) > -1) {
            props.pressToggleSign();
        }

        // If it is an operation key
        else if (keyLookup.operation.indexOf(keyChar) > -1) {
            // Convert multi/div keys to usage variant
            if (keyChar === "*") keyChar = "×";
            if (keyChar === "/") keyChar = "÷";

            props.pressOperation(keyChar);
        }

        // If equal sign or enter key
        else if (keyLookup.equal.indexOf(keyChar) > -1) {
            props.pressEqual();
        }

        // If backspace key is pressed
        else if (keyLookup.backspace.indexOf(keyChar) > -1) {
            props.pressBackspace();
        }
    }
}

export default calculatorKeyboard;
