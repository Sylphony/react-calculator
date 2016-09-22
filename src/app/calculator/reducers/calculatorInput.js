

const INITIAL_STATE = {
    inputNum: "",       // The input number used for logic
    onNextNum: false,
    operation: null,
    screenShow: true    // Toggle the user input display (the result reducer will be opposite of this)
};

/**
 * Calculator input reducer.
 * Shows only what the user types.
 */
function calculatorInput(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM":
            // When the user is on the next number, clear the current inputNum first
            if (state.onNextNum) {
                return {
                    ...state,
                    inputNum: "" + action.num,
                    onNextNum: false
                };
            }

            // Store the input value (as a string)
            return {
                ...state,
                inputNum: state.inputNum + action.num
            };

        case "PRESS_DECIMAL": 
            let hasDecimal = (/\./).test(state.inputNum);

            // Only add if no decimal has been placed yet
            if (!hasDecimal) {
                return {
                    ...state,
                    inputNum: state.inputNum + "."
                };
            }

            return state;

        case "PRESS_TOGGLE_SIGN":
            // Conver string display to number
            let theNum = parseFloat(state.inputNum);

            // If positive, add negative
            if (theNum > 0) {
                return {
                    ...state,
                    inputNum: "-" + state.inputNum
                };
            }

            // If negative, remove it
            else if (theNum < 0) {
                return {
                    ...state,
                    inputNum: state.inputNum.slice(1)
                };
            }

            // Return original state if zero
            return state;

        case "PRESS_OPERATION":
            // If there is no operation yet:
            // 1. Set it
            // 2. Save current input as the result
            // 3. Raise a flag to blank the next number typing
            if (!state.operation) {
                return {
                    ...state,
                    operation: action.operation,
                    onNextNum: true
                };
            }

            // If the user clicks on an operation while they have not input the next number: Save the new operation
            else if (!state.inputNum && (action.operation !== state.operation)) {
                 return {
                    ...state,
                    operation: action.operation
                };
            }

            // If there is an input number already
            else if (state.inputNum && action.operation) {
                return {
                    ...state,
                    operation: action.operation,
                    screenShow: false
                };
            }

            return state;

        default:
            return state;
    }

}

export default calculatorInput;
