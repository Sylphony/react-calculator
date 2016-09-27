const INITIAL_STATE = {
    showCommandsList: false
};

/**
 * Commands list reducer.
 */
function commandsList(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "PRESS_TOGGLE_COMMANDS_LIST":
            return {
                ...state,
                showCommandsList: !state.showCommandsList
            };

        default:
            return state;
    }
}

export default commandsList;
