import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./calculator/store";
import CalculatorContainer from "./calculator/containers/CalculatorContainer.jsx";


class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <CalculatorContainer />
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
