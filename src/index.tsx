import * as React from 'react';
import * as ReactDOM from "react-dom";
import App from './App';
import "./styles.scss";
import { Provider } from 'react-redux';
import { store } from './redux/Store/store';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);