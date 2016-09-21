export function pressNum(num) {
    return {
        type: "PRESS_NUM",
        num
    };
}

export function pressOperation(operation) {
    return {
        type: "PRESS_OPERATION",
        operation
    };
};

// Add two numbers
export function pressAdd(operation) {
    return {
        type: "PRESS_ADD",
        operation
    };
}

// Subtract two numbers
export function pressSubtract(operation) {
    return {
        type: "PRESS_SUBTRACT",
        operation
    };
}

// Multiply two numbers
export function pressMultiply(operation) {
    return {
        type: "PRESS_MULTIPLY",
        operation
    };
}

// Divide two numbers
export function pressDivide(operation) {
    return {
        type: "PRESS_DIVIDE",
        operation
    };
}

// Calculate the result
export function pressEqual() {
    return {
        type: "PRESS_EQUAL"
    };
}
