import * as React from 'react';
import '../App.css';
import {Grid, Button, Box} from '@mui/material';
import $ from 'jquery';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeColor() {
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
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>                
                <Grid item xs={5}>
                </Grid>
                <Grid item xs={7} style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}>
                    <Grid item xs={6}>
                    <Button variant="contained" style={{width: '90%', color:"black", backgroundColor:"white"}} onClick={toWhiteTheme}><LightModeIcon></LightModeIcon></Button>
                    </Grid>
                    <Grid item xs={6} >
                    <Button variant="contained" style={{width: '90%', color:"white", backgroundColor:"black"}} onClick={toDarkTheme}><DarkModeIcon></DarkModeIcon></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ThemeColor;
