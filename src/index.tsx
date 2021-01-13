import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import {ThemeProvider} from "@material-ui/core";
import {theme} from "./theme";

import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';

import App from './App';
import {store} from "./store/store";


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>

    </ThemeProvider>,
    document.getElementById('root')
);

