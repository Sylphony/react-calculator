import React from "react";
import AssistButtonToggle from "./AssistButtonToggle.jsx";
import AssistTable from "./AssistTable.jsx";

class Assist extends React.Component {
    render() {
        return (
            <div className="assist">
                <AssistButtonToggle />

                <AssistTable />
            </div>
        );
    }
}

export default Assist;
