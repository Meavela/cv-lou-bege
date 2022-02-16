import * as React from 'react';
import '../App.css';
import {Grid, Box} from '@mui/material';
import $ from 'jquery';
import frenchIcon from '../assets/img/france-flag.png';
import ukIcon from '../assets/img/united-kingdom-flag.png';

function Traduction() {
    function toFrench(){
        console.log("To french");
    }
    function toEnglish(){
        console.log("To english");
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>                
                <Grid item xs={5}>
                </Grid>
                <Grid item xs={7} style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}>
                    <Grid item xs={5}>
                        <img src={frenchIcon} className='Traduction-Icons' onClick={toFrench}></img>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5}>
                        <img src={ukIcon} className='Traduction-Icons' onClick={toEnglish}></img>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Traduction;
