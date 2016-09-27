import logger from "./../middleware/logger";

export function pressToggleCommandsList() {
    return {
        type: "PRESS_TOGGLE_COMMANDS_LIST"
    };
};

export function testCommand() {
    return function (dispatch, getState) {
        console.log(getState());
        dispatch(pressToggleCommandsList());
    };
};
