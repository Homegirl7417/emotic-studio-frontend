import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";
import store, {history} from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

localStorage.setItem("bestCourse","nomad academy");

