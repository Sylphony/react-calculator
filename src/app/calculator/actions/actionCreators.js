// A number key is pressed
export function pressNum(num) {
    return {
        type: "PRESS_NUM",
        num
    };
}

// The decimal key is pressed
export function pressDecimal() {
    return {
        type: "PRESS_DECIMAL"
    };
}

// An operation key is pressed
export function pressOperation(operation) {
    return {
        type: "PRESS_OPERATION",
        operation
    };
};

// Equal button is pressed
export function pressEqual() {
    return {
        type: "PRESS_EQUAL"
    };
}

// Clear button is pressed
export function pressClear() {
    return {
        type: "PRESS_CLEAR"
    };
}

// Sign toggle button is pressed
export function pressToggleSign() {
    return {
        type: "PRESS_TOGGLE_SIGN"
    };
}
