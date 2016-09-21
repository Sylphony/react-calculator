const INITIAL_STATE = {
    inputNum: "",
    calcNums: [],
    screen: ""
};

function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "PRESS_NUM":
            // Concatenate each number pressed
            let newInputNum = state.inputNum + action.num;
            return Object.assign({}, state, { 
                inputNum: newInputNum,
                screen: newInputNum
            });

        case "ADD":
            // If only one number is available...
            // How should I push it to the array without push?
            if (state.numbers.length < 2) {
                return Object.assign({}, state, {
                    calcNums: [
                        // state.calcNums.slice(0, 1)
                    ]
                });
            }

            else {
                return Object.assign({}, state, { 
                    result: state.numbers[0] + state.numbers[1] 
                });
            }

        case "SUBTRACT":
            //return Object.assign({}, state, { result: state.numbers[0] - state.numbers[1] });

        default:
            return state;
    }
}

export default calculator;
