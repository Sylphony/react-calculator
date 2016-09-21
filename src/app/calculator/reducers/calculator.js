const INITIAL_STATE = {
    inputNum: "",
    result: "",
    screen: ""
};

function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM":
            // Concatenate each number pressed
            let newInputNum = state.inputNum + action.num;
            return {
                ...state,
                inputNum: newInputNum,
                screen: newInputNum
            };

        case "ADD":
            // If there isn't a result yet, make it the result
            // Otherwise, add the number
            let result = (!state.result) ? parseInt(state.inputNum) : state.result + parseInt(state.inputNum);

            // On return, set result, display on screen, empty the input
            return {
                ...state,
                result: result,
                screen: result,
                inputNum: ""
            };

        case "SUBTRACT":
            //return Object.assign({}, state, { result: state.numbers[0] - state.numbers[1] });

        default:
            return state;
    }
}

export default calculator;
