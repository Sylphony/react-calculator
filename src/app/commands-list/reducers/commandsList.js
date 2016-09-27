const INITIAL_STATE = {
    showList: false
};

/**
 * Commands list reducer.
 */
function commandsList(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "PRESS_TOGGLE_COMMANDS_LIST":
            return {
                ...state,
                showList: !state.showList
            };

        default:
            return state;
    }
}

export default commandsList;
