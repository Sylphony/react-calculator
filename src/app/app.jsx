import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app.store";
import CalculatorContainer from "./calculator/containers/CalculatorContainer.jsx";
import CommandsListContainer from "./commands-list/containers/CommandsListContainer.jsx";

class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <div>
                    <CommandsListContainer />
                    <CalculatorContainer />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
