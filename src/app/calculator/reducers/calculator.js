function calculator(state = { numbers: [] }, action) {
    switch (action.type) {
        case "PRESS_NUM":
            if (state.numbers.length < 2) {
                console.log(action);
                let numsArr = state.numbers;
                numsArr.push(action.num);
                return Object.assign({}, state, { numbers: numsArr });
            }

            return state;

        case "ADD":
            return Object.assign({}, state, { result: state.numbers[0] + state.numbers[1] });

        case "SUBTRACT":
            return Object.assign({}, state, { result: state.numbers[0] - state.numbers[1] });

        default:
            return state;
    }
}

export default calculator;
