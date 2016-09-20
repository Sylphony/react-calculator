function calculator(state = { inputNum: "", calcNums: [] }, action) {
    switch (action.type) {
        case "PRESS_NUM":
            // Concatenate each number pressed
            let newInputNum = state.inputNum + action.num;
            return Object.assign({}, state, { inputNum: newInputNum });

        case "ADD":
            // If only one number is available
            // if (state.numbers.length < 2) {
            //     let 
            // }

            // else {
            //     return Object.assign({}, state, { result: state.numbers[0] + state.numbers[1] });
            // }

        case "SUBTRACT":
            //return Object.assign({}, state, { result: state.numbers[0] - state.numbers[1] });

        default:
            return state;
    }
}

export default calculator;
