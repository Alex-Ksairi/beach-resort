
// required importing react, reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// importing router
import { BrowserRouter as Router } from "react-router-dom";

// importing RoomProvider
import { RoomProvider } from "./store/context";


ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


