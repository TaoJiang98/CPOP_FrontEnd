import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from './component/TopBar';
import Survey from './component/Survey';
import Home from './screen/Home';
import Patient_HP from './screen/Patient/Patient_Home_Page';
import Doctor_HP from './screen/Doctor/Doctor_Home_Page';
import Info from './screen/Patient/Basic_Info';
import Login from './screen/Login/Login';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Route path="/" exact component={Home} />
      <Route path="/patient" component={Patient_HP} />
      <Route path="/doctor" component={Doctor_HP} />
      <Route path="/survey" component={Survey} />
      <Route path="/info" component={Info} />
      <Route path="/login" component={Login} />
    </Router>
  )
}

export default App;