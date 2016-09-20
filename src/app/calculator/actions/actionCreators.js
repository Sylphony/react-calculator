// Number pressed
export function press(num) {
    return {
        type: "PRESS_NUM",
        num
    };
}

// Add two numbers
export function add(num1, num2) {
    return {
        type: "ADD",
        num1,
        num2
    };
}

// Subtract two numbers
export function subtract(num1, num2) {
    return {
        type: "SUBTRACT",
        num1,
        num2
    };
}
