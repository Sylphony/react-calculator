import React from "react";

class AssistTableRow extends React.Component {
    render() {
        return (
            <tr className="assist__table-row">
                <td>{ this.props.keyChar }</td>
                <td>{ this.props.keyFunc }</td>
            </tr>
        );
    }
}

export default AssistTableRow;
