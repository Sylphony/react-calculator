import React from "react";
import CommandsListButtonToggle from "./CommandsListButtonToggle.jsx";
import CommandsListTable from "./CommandsListTable.jsx";

class CommandsList extends React.Component {
    render() {
        return (
            <div className="commands-list">
                <CommandsListButtonToggle />

                <CommandsListTable />
            </div>
        );
    }
}

export default CommandsList;
