import calculate from "./functions/calculate";

const INITIAL_STATE = {
    inputNum: "",       // The input number
    result: "",         // The calculated result so far
    screen: ""          // What is seen on the screen
};

function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM":
            // Concatenate each number pressed
            let newInputNum = parseInt(state.inputNum + action.num);

            return {
                ...state,
                inputNum: newInputNum,
                screen: newInputNum
            };

        case "PRESS_OPERATION":
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

                // Then store the new one
                return {
                    ...newState,
                    operation: action.operation
                };
            }

        // case "PRESS_EQUAL":
        //     return calculate(state, "equal");

        default:
            return state;
    }
}

export default calculator;
