import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { theme } from './theme';
import 'typeface-roboto';
import MomentUtils from '@date-io/moment';
import { changeRoute } from './nav/NavReducer';
import { requestNieuws } from './nieuws/NieuwsReducer';
import 'tachyons';

const rootReducer = combineReducers({ changeRoute, requestNieuws });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<MuiThemeProvider theme={theme}>
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiPickersUtilsProvider>
</MuiThemeProvider>,
document.getElementById('root'));
serviceWorker.register();
