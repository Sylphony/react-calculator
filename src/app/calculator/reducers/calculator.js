import calculate from "./functions/calculate";
import checkLeadingZero from "./functions/checkLeadingZero";

const INITIAL_STATE = {
    inputNum: "0",          // The input number used for logic
    onNextNum: false,       // Flag to signal state that user is on next number
    result: 0,              // The calculated result so far
    operation: null,        // What operation is being performed
    disableInput: false,    // Flag to disable input (for inexistent values)
    screen: "result"        // Determine which value to show on screen ("input" or "result")
};

/**
 * Calculator reducer.
 */
function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM": {
            let hasLeadingZero = checkLeadingZero(state);

            // If there is only a zero (which implies leading zero), replace it instead of concatenating with it
            // This will also prevent multiple leading zeroes
            if (hasLeadingZero && state.inputNum.length === 1) {
                return {
                    ...state,
                    inputNum: action.num,
                    onNextNum: false,
                    screen: "input"
                };
            }

            // When the user is on the next number, clear the current inputNum first
            if (state.onNextNum) {
                return {
                    ...state,
                    inputNum: "" + action.num,
                    onNextNum: false,
                    screen: "input"
                };
            }

            // Store the input value (as a string)
            return {
                ...state,
                inputNum: state.inputNum + action.num,
                screen: "input"
            };
        }


        case "PRESS_BACKSPACE": {
            // Only allow backspacing on current input
            if (!state.onNextNum) {
                let newInputNum = state.inputNum.slice(0, state.inputNum.length-1);

                // If negative sign remains, reset it
                if (newInputNum === "-") newInputNum = "";

                // If blank, set to '0'
                if (newInputNum === "") newInputNum = "0";

                return {
                    ...state,
                    inputNum: newInputNum,
                    screen: "input"
                };
            }

            return state;
        }


        case "PRESS_DECIMAL": {
            let hasDecimal = (/\./).test(state.inputNum);

            // Only add if no decimal has been placed yet
            if (!hasDecimal) {
                return {
                    ...state,
                    inputNum: state.inputNum + ".",
                    onNextNum: false,   // If results have been calculated and a decimal is clicked, continue using the same number
                    screen: "input"
                };
            }

            return state;
        }

        case "PRESS_TOGGLE_SIGN": {
            // Conver string display to number
            let theNum = parseFloat(state.inputNum);

            // If positive, add negative
            if (theNum > 0) {
                return {
                    ...state,
                    inputNum: "-" + state.inputNum,
                    screen: "input"
                };
            }

            // If negative, remove it
            else if (theNum < 0) {
                return {
                    ...state,
                    inputNum: state.inputNum.slice(1),
                    screen: "input"
                };
            }

            // Return original state if zero
            return state;
        }


        case "PRESS_OPERATION": {
            // Only progress if there is a number already first
            if (state.inputNum) {
                // If there is no operation clicked yet:
                // 1. Set it
                // 2. Save the current input as the result
                // 3. Raise the signal for calculator to know user is on next number
                if (!state.operation) {
                    return {
                        ...state,
                        operation: action.operation,
                        result: parseFloat(state.inputNum),
                        onNextNum: true,
                        screen: "input"
                    };
                }

                // If the user has not set the next number and clicks on another operation before calculation:
                // 1. Save the new operation
                // 2. Raise the signal for calculator to know user is on next number
                else if (state.onNextNum && (action.operation !== state.operation)) {
                    return {
                        ...state,
                        operation: action.operation,
                        onNextNum: true,
                        screen: "input"
                    };
                }

                // If the user has set another number and another operation is clicked:
                // 1. Calculate the previous operation
                // 2. Store the result
                // 3. Set the result to the input
                // 4. Raise the signal for calculator to know user is on next number
                // 5. Store the new operation
                else if (!state.onNextNum && action.operation) {
                    let result = calculate(state);

                    if (isNaN(result) || result === Infinity) {
                        return {
                            ...state,
                            result: "N/A: Clear the screen",
                            operation: null,
                            disableInput: true,
                            screen: "result"
                        };
                    }

                    return {
                        ...state,
                        result: result,
                        inputNum: result.toString(),
                        operation: action.operation,
                        onNextNum: true,
                        screen: "result"
                    };
                }
            }

            return state;
        }


        case "PRESS_EQUAL": {
            // If user has already clicked an operation and there exists an inputNum:
            // 1. Calculate the previous operation
            // 2. Store the result
            // 3. Set the result to the input
            // 4. Raise the signal for calculator to know user is on next number
            // 5. Remove stored operation
            // 6. Show the result screen
            if (state.inputNum && state.operation) {
                let result = calculate(state);

                if (isNaN(result) || result === Infinity) {
                    return {
                        ...state,
                        result: "N/A: Clear the screen",
                        operation: null,
                        disableInput: true,
                        screen: "result"
                    };
                }

                return {
                    ...state,
                    result: result,
                    inputNum: result.toString(),
                    operation: null,
                    onNextNum: true,
                    screen: "result"
                };
            }

            return state;
        }


        case "PRESS_CLEAR": {
            return {
                ...state,
                ...INITIAL_STATE
            };
        }


        default: {
            return state;
        }
    }
}

export default calculator;
