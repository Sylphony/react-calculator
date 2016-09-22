function calculate(state) {
    let [result, inputNum, operation] = [parseFloat(state.result), parseFloat(state.inputNum), state.operation];

    // At least a number must be inputted first 
    if (inputNum) {
        // If there isn't a result yet, make the typed number the result
        if (!result) {
            result = inputNum;
        }

        // Otherwise, perform the operation
        else {
            switch (operation) {
                case "+":
                    result = result + inputNum;
                    break;

                case "-":
                    result = result - inputNum;
                    break;

                case "×":
                    result = result * inputNum;
                    break;

                case "÷":
                    result = result / inputNum;
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
