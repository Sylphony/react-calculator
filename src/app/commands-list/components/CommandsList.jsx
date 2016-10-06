import React from "react";
import classNames from "classnames";
import CommandsListButtonToggle from "./CommandsListButtonToggle.jsx";
import CommandsListTable from "./CommandsListTable.jsx";

class CommandsList extends React.Component {
    render() {
        return (
            <div className={ classNames("commands-list", { "commands-list--show": this.props.commandsList.showList }) }>
                <CommandsListButtonToggle click={ this.props.pressToggleCommandsList } />

                <CommandsListTable />
            </div>
        );
    }
}

CommandsList.propTypes = {
    commandsList: React.PropTypes.object.isRequired,
    pressToggleCommandsList: React.PropTypes.func.isRequired
};

export default CommandsList;
