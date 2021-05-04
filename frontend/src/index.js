import "@vonagevolta/volta2/dist/css/volta.min.css";
import "assets/css/style.css";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import OT from "@opentok/client"
import * as serviceWorker from './serviceWorker';

// OT.setLogLevel(OT.DEBUG);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
