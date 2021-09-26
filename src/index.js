import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Patient_HP from '../src/component/Patient/Patient_Home_Page';
import Doctor_HP from '../src/component/Doctor/Doctor_Home_Page';
import Survey from '../src/component/Survey';
import Info from '../src/component/Patient/Basic_Info';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  (<Router history={history}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/patient" component={Patient_HP} />
      <Route path="/doctor" component={Doctor_HP} />
      <Route path="/survey/" component={Survey} />
      <Route path="/info" component={Info} />
    </Switch>
  </Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
