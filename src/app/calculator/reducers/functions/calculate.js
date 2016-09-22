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

    // Return final result
    return result;
}

export default calculate;
