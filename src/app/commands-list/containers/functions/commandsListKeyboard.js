// A lookup object to see which key type is pressed
const keyLookup = {
    commandsList: ["F1"]
};

/**
 * Keyboard event callback for commands list.
 * @param e: Event (keydown).
 * @param props: The component's properties.
 */
function commandsListKeyboard(e, props) {
    // Stop any events that may be triggered as a result of button focus (e.g. pressing enter while button is focused from clicking)
    e.preventDefault();

    let keyChar = e.key;

    // When "F1" key is pressed
    if (keyLookup.commandsList.indexOf(keyChar) > -1) {
        props.pressToggleCommandsList();
    }
}

export default commandsListKeyboard;
