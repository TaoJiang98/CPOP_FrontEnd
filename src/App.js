// page import
// import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from './component/TopBar';
import Survey from './component/Survey';
import Home from './screen/Home';
import Patient_HP from './screen/Patient/Patient_Home_Page';
import Doctor_HP from './screen/Doctor/Doctor_Home_Page';
import Info from './screen/Patient/Basic_Info';
import Login from './screen/Login/Login';

// component import
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const App = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
        {/* Top bar implemented here. */}
        <TopBar/>    
      <Toolbar id="back-to-top-anchor" />
      {/* <Container> */}
        {/* <Box sx={{ my: 2 }}> */}
          {/* Router */}
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/patient" component={Patient_HP} />
            <Route path="/doctor" component={Doctor_HP} />
            <Route path="/survey" component={Survey} />
            <Route path="/info" component={Info} />
            <Route path="/login" component={Login} />
          </Router>
        {/* </Box> */}
      {/* </Container> */}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;