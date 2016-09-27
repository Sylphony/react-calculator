import React from "react";

class CommandsListTableRow extends React.Component {
    render() {
        return (
            <tr className="commands-list__table-row">
                <td>{ this.props.keyChar }</td>
                <td>{ this.props.keyFunc }</td>
            </tr>
        );
    }
}

export default CommandsListTableRow;
