import React, { Component } from 'react';
import './App.css';
import {Grid, Box} from '@mui/material';
import Home from './screens/Home';
import Formations from './screens/Formations';
import ResponsiveAppBar from './navigation/Navigation';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

            
class App extends Component {
  render() {
    return (
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="App-header">
            <Grid item xs={12}>
              {/* Header */}
              <ResponsiveAppBar></ResponsiveAppBar>
            </Grid>
            <Grid item xs={12}>
              {/* Main */}
              <Routes>
                <Route exact path='/cv-lou-bege/' element={< Home />}></Route>
                <Route exact path='/cv-lou-bege/formations' element={< Formations />}></Route>
              </Routes>
            </Grid>
            <Grid item xs={12}>
              {/* Bottom */}
            </Grid>
          </Grid>
        </Box>
      </Router>
    );
  }
}

export default App;
