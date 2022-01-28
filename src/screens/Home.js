import * as React from 'react';
import '../App.css';
import logo from '../assets/img/lou_bege.jpg';
import { Grid } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';

function Home() {
    return (
        <Card sx={{ maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
            <CardMedia component="img" height="140" style={{backgroundColor: 'red'}} />
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={4} style={{textAlign: 'center'}}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid item xs={8} style={{textAlign: 'center'}}>
                        <Grid item xs={12}>
                            Name
                        </Grid>
                        <Grid item xs={12}>
                            Description
                        </Grid>
                        <Grid item xs={12}>
                            Mail
                        </Grid>
                        <Grid item xs={12}>
                            Ville
                        </Grid>
                        <Grid item xs={12}>
                            Entreprise
                        </Grid>
                        <Grid item xs={12}>
                            Passions
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Home;
