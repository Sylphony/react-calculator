import calculate from "./functions/calculate";

const INITIAL_STATE = {
    inputNum: "",
    result: 0,          // The calculated result so far
    screenShow: false   
};

// Calculator result reducer
function calculatorResult(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM": {
            return {
                ...state,
                inputNum: parseFloat(state.inputNum.toString() + action.num)
            };
        }

        case "PRESS_DECIMAL": {
            // Test the number if it has a decimal point
            // If the user has not typed anything yet, use the last computed result
            let hasDecimal = (/\./).test(state.inputNum || state.result);

            // If the screen does not show a decimal yet, then add it
            if (!hasDecimal) {
                return {
                    ...state,
                    inputNum: (state.result) ? (state.result + ".") : (state.inputNum + "."),
                    screen: (state.result) ? (state.result + ".") : (state.inputNum + "."),
                };
            }

            return state;
        }


        case "PRESS_TOGGLE_SIGN": {
            let theNum = parseFloat(state.inputNum) || state.result;

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
        }


        case "PRESS_OPERATION": {
            // If there is no operation yet: Set it, save the current input as the result, and clear it
            if (!state.operation) {
                return {
                    ...state,
                    operation: action.operation,
                    result: parseFloat(state.inputNum),
                    inputNum: ""
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
                // Calculate the previous operation first
                const newState = calculate(state);

                // Then store the new operation
                return {
                    ...newState,
                    operation: action.operation
                };
            }
        }


        case "PRESS_EQUAL": {
            if (state.operation) {
                return {
                    ...calculate(state)
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

export default calculatorResult;
