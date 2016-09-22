import calculate from "./functions/calculate";

const INITIAL_STATE = {
    inputNum: "",           // The input number used for logic
    onNextNum: false,       // Flag to signal state that user is on next number
    result: 0,              // The calculated result so far
    operation: null,        // What operation is being performed
    screen: "input"         // Determine which value to show on screen ("input" or "result")
};

/**
 * Calculator result reducer.
 * Does the internal calculations and shows only the result.
 */
function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM":
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


        case "PRESS_DECIMAL": 
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


        case "PRESS_TOGGLE_SIGN":
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


        case "PRESS_OPERATION":
            // If there is no operation clicked yet:
            // 1. Set it
            // 2. Save the current input as the result
            // 3. Raise the signal for calculator to know user is on next number
            if (!state.operation) {
                return {
                    ...state,
                    operation: action.operation,
                    result: parseFloat(state.inputNum),
                    onNextNum: true
                };
            }

            // If the user clicks on an operation while they have not input the next number: 
            // 1. Save the new operation
            // 2. Raise the signal for calculator to know user is on next number
            else if (!state.inputNum && (action.operation !== state.operation)) {
                 return {
                    ...state,
                    operation: action.operation,
                    onNextNum: true
                };
            }

            // If user has typed an input number already and click on an action:
            // 1. Calculate the previous operation
            // 2. Store the result
            // 3. Set the result to the input
            // 4. Raise the signal for calculator to know user is on next number
            // 5. Store the new operation
            // 6. Show the result screen
            else if (state.inputNum && action.operation) {
                let result = calculate(state);

                return {
                    ...state,
                    result: result,
                    inputNum: result.toString(),
                    operation: action.operation,
                    onNextNum: true,
                    screen: "result"
                };
            }

            return state;


        case "PRESS_EQUAL":
            // If user has already clicked an operation and there exists an inputNum:
            // 1. Calculate the previous operation
            // 2. Store the result
            // 3. Set the result to the input
            // 4. Raise the signal for calculator to know user is on next number
            // 5. Remove stored operation
            // 6. Show the result screen
            if (state.inputNum && state.operation) {
                let result = calculate(state);

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
