import React from "react";
import classNames from "classnames";
import CommandsListButtonToggle from "./CommandsListButtonToggle.jsx";
import CommandsListTable from "./CommandsListTable.jsx";

class CommandsList extends React.Component {
    render() {
        return (
            <div className={ classNames("commands-list", { "commands-list--show": this.props.commandsList.showList }) }>
                <CommandsListButtonToggle click={ this.props.actions.pressToggleCommandsList } />

                <CommandsListTable />
            </div>
        );
    }
}

export default CommandsList;
