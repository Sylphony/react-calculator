import calculate from "./functions/calculate";

const INITIAL_STATE = {
    inputNum: "",
    result: 0,          // The calculated result so far
    operation: null,
    screenShow: false
};

/**
 * Calculator result reducer.
 * Does the internal calculations and shows only the result.
 */
function calculatorResult(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM":
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
                // Store the result
                // Then store the new operation
                return {
                    ...state,
                    result: calculate(state),
                    operation: action.operation,
                    screenShow: true
                };
            }

            return state;


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
