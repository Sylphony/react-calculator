import calculate from "./functions/calculate";

const INITIAL_STATE = {
    inputNum: "",       // The input number
    result: "",         // The calculated result so far
    screen: ""          // What is seen on the screen
};

// Calculator reducer
function calculator(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "PRESS_NUM": {
            // Concatenate each number pressed (also convert to number)
            let newInputNum = state.inputNum + action.num;

            return {
                ...state,
                inputNum: parseInt(newInputNum),
                screen: newInputNum
            };
        }

        case "PRESS_OPERATION": {
            // If there is no operation yet: Set it, save the current input as the result, and clear it
            if (!state.operation) {
                return {
                    ...state,
                    operation: action.operation,
                    result: state.inputNum,
                    inputNum: ""
                };
            }

            // If the user clicks on an operation while they have not input the next number: Save the new operation
            else if (!state.inputNum && action.operation !== state.operation) {
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
            return calculate(state);
        }

        case "PRESS_CLEAR": {
            return {
                ...state,
                ...INITIAL_STATE
            };
        }

        // case "PRESS_TOGGLE_SIGN": {
        //     let newInputNum = -1 * state.inputNum;
        //     let newScreenDisp = (newInputNum <= 0) ? ("-" + state.screen) : state.screen.slice(1);

        //     console.log("New input num: ", newInputNum);
        //     console.log("New screenDisp: ", newScreenDisp);

        //     return {
        //         ...state,
        //         inputNum: newInputNum,
        //         screen: newScreenDisp
        //     };
        // }

        default: {
            return state;
        }
    }
}

export default calculator;
