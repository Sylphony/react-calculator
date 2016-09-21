// A number key is pressed
export function pressNum(num) {
    return {
        type: "PRESS_NUM",
        num
    };
}

// An operation key is pressed
export function pressOperation(operation) {
    return {
        type: "PRESS_OPERATION",
        operation
    };
};

// Calculate the result
export function pressEqual() {
    return {
        type: "PRESS_EQUAL"
    };
}

// Clear the result
export function pressClear() {
    return {
        type: "PRESS_CLEAR"
    };
}
