import React from "react";
import classNames from "classnames";
import CommandsListButtonToggle from "./CommandsListButtonToggle.jsx";
import CommandsListTable from "./CommandsListTable.jsx";
import commandsListKeyboard from "./functions/commandsListKeyboard";

class CommandsList extends React.Component {
    constructor(props) {
        super(props);

        // Handler for keyboard event listener
        this.commandsListKeyboardHandler = (e) => {
            commandsListKeyboard(e, this.props);
        };
    }

    render() {
        return (
            <div className={ classNames("commands-list", { "commands-list--show": this.props.commandsList.showList }) }>
                <CommandsListButtonToggle click={ this.props.actions.pressToggleCommandsList } />

                <CommandsListTable />
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener("keydown", this.commandsListKeyboardHandler);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.commandsListKeyboardHandler);
    }
}

export default CommandsList;
