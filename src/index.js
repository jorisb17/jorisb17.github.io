import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './theme';
import 'typeface-roboto';
import {changeRoute} from "./nav/NavReducer";
import 'tachyons';

const rootReducer = combineReducers({changeRoute});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<MuiThemeProvider theme={theme}>
                    <Provider store={store}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </Provider>
                </MuiThemeProvider>
                , document.getElementById('root'));

serviceWorker.register();
