import React from "react";
import AssistTable from "./AssistTable.jsx";

class Assist extends React.Component {
    render() {
        return (
            <div className="assist">
                <button type="button" className="assist__btn-menu-toggle">Toggle</button>
                
                <AssistTable />
            </div>
        );
    }
}

export default Assist;
