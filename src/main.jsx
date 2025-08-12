import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import { requestRobots, searchRobots } from './reducers';
import './index.css';

const logger = createLogger();
const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefault) =>
    getDefault().concat(import.meta.env.MODE !== 'production' ? [logger] : []),
  devTools: import.meta.env.MODE !== 'production',
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
