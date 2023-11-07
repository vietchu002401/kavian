import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NotificationContainer/>
      <Provider store={store}>
         <BrowserRouter>
             <App/>
         </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
