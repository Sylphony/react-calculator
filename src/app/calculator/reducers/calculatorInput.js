

const INITIAL_STATE = {
    inputNum: "",       // The input number used for logic
    screenShow: true    // Toggle the user input display (the result reducer will be opposite of this)
};

/**
 * Calculator input reducer.
 */
function calculatorInput(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM":
            return {
                ...state,
                inputNum: state.inputNum + action.num
            };

        case "PRESS_DECIMAL": 
            // Test the number if it has a decimal point
            // If the user has not typed anything yet, use the last computed result
            let hasDecimal = (/\./).test(state.inputNum);

            // If the screen does not show a decimal yet, then add it
            if (!hasDecimal) {
                return {
                    ...state,
                    inputNum: (state.result) ? (state.result + ".") : (state.inputNum + "."),
                    screen: (state.result) ? (state.result + ".") : (state.inputNum + "."),
                };
            }

            return state;

        case "PRESS_TOGGLE_SIGN":
            let theNum = parseFloat(state.inputNum);

            // Test the number if it has a negative sign
            // If the user has not typed anything yet, use the last computed result
            let hasNegative = (/\-/).test((state.inputNum) || state.result.toString());

            // For non-zero numbers only (0 does not have a "negative")
            if (theNum !== 0) {
                // If there is no operation set, use the last computed result
                if (!state.operation) {
                    return {
                        ...state,
                        result: -(state.result),
                        inputNum: (!hasNegative) ? ("-" + state.result.toString()) : state.result.toString().slice(1),
                        screen: (!hasNegative) ? ("-" + state.result.toString()) : state.result.toString().slice(1)
                    };
                }

                // Otherwise, take the current input number instead
                else {
                    return {
                        ...state,
                        result: -(state.result),
                        inputNum: (!hasNegative) ? ("-" + state.inputNum.toString()) : state.inputNum.toString().slice(1),
                        screen: (!hasNegative) ? ("-" + state.inputNum.toString()) : state.inputNum.toString().slice(1)
                    };
                }
            }

            // Return original state if zero
            return state;

        default:
            return state;
    }

}

export default calculatorInput;
