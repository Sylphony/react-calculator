function checkLeadingZero(state) {
    let inputNum = state.inputNum;
    let hasLeadingZero = false;

    if (inputNum.indexOf("0") === 0) {
        hasLeadingZero = true;
    }

    return hasLeadingZero;
}

export default checkLeadingZero;
