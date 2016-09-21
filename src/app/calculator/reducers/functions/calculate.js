function calculate(state) {
    let result = state.result,
        operation = state.operation;

    console.log(state);

    // At least a number must be inputted first 
    if (state.inputNum) {
        // If there isn't a result yet, make the typed number the result
        if (!result) {
            result = parseInt(state.inputNum);
        }

        // Otherwise, perform the operation
        else {
            switch (operation) {
                case "+":
                    result = state.result + parseInt(state.inputNum);
                    break;

                case "-":
                    result = state.result - parseInt(state.inputNum);
                    break;

                case "x":
                    result = state.result * parseInt(state.inputNum);
                    break;

                case "/":
                    result = state.result / parseInt(state.inputNum);
                    break;
            }
        }
    }

    // On return, set result, display on screen, empty the input
    return {
        ...state,
        result: result,
        screen: result,
        inputNum: ""
    };
}

export default calculate;
