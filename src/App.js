import * as React from 'react';
import './App.css';
import logo from './assets/img/lou_bege.jpg';
import {Grid, Button, Box} from '@mui/material';
import $ from 'jquery';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  function toWhiteTheme(){
    console.log("To white theme");
    $(".App-header").css("backgroundColor", "white");
    $(".App-header").css("color", "#282c34");
  }
  function toDarkTheme(){
    console.log("To dark theme");
    $(".App-header").css("backgroundColor", "#282c34");
    $(".App-header").css("color", "white");
  }
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}  className="App-header">
          <Grid item xs={10}>
            
          </Grid>
          <Grid item xs={2} style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}>
            <Grid item xs={6}>
              <Button variant="contained" style={{width: '90%', color:"black", backgroundColor:"white"}} onClick={toWhiteTheme}><LightModeIcon></LightModeIcon></Button>
            </Grid>
            <Grid item xs={6} >
              <Button variant="contained" style={{width: '90%', color:"white", backgroundColor:"black"}} onClick={toDarkTheme}><DarkModeIcon></DarkModeIcon></Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                This is the CV of Lou BEGE
              </p>
              <Button variant="contained">Welcome !</Button>
            </header>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
