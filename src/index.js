import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from "redux";
import RootReducer from "./reducers/rootReducer"
import {Provider} from "react-redux";
import logger from "redux-logger"

const store = createStore(RootReducer,applyMiddleware(logger))


ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
      , 
      document.getElementById('root')
);

