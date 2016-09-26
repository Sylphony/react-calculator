import React from "react";
import AssistMenu from "./AssistMenu.jsx";

class Assist extends React.Component {
    render() {
        return (
            <div className="assist">
                <button type="button" className="assist__btn-menu-toggle">Toggle</button>
                
                <AssistMenu />
            </div>
        );
    }
}

export default Assist;
