import * as React from 'react';
import logo from '../assets/img/lou_bege.jpg';
import cv from '../assets/img/CV_Lou_BEGE.pdf';
import { Card, CardContent, CardMedia, CardActions,Grid, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PositionIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import WebIcon from '@mui/icons-material/Language';

function Home() {
    return (
        <Card sx={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 0 10px 5px #89dcfa' }}>
            <CardMedia component="img" height="50" style={{backgroundColor: '#e04136'}} />
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={4} style={{textAlign: 'center'}}>
                        <img src={logo} className="App-logo" alt="logo" style={{borderRadius: '15px'}} />
                    </Grid>
                    <Grid item xs={8} style={{textAlign: 'left'}}>
                        <Grid item xs={12} style={{paddingBottom: "10px", fontSize : "60px", paddingTop: "10px"}}>
                            Lou BÉGÉ, <span style={{fontSize: "30px"}}>22 ans</span>
                        </Grid>
                        <Grid item xs={12} style={{paddingBottom: "15px", fontSize : "25px", fontStyle: "italic"}}>
                            Alternante développeuse .NET
                        </Grid>
                        <hr style={{width: '70%', marginLeft: 0}}></hr>
                        <Grid item xs={12} className='Profile-Grid-Infos' style={{paddingTop: "15px"}}>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <WorkIcon></WorkIcon> ENTREPRISE
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                Hardis Group
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className='Profile-Grid-Infos'>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <PositionIcon></PositionIcon> VILLE
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                Grenoble
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className='Profile-Grid-Infos'>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <EmailIcon></EmailIcon> EMAIL
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                lou.bege@hotmail.com
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className='Profile-Grid-Infos'>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <WebIcon></WebIcon> LINKEDIN
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                <a href='https://linkedin.com/in/lou-bege/' target="_blank" rel="noopener noreferrer" style={{color: '#e04136'}}>linkedin.com/in/lou-bege/</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions style={{backgroundColor: 'white'}}>
                <Button size="large" variant="contained" href={cv} download="lou-bege-cv" style={{marginRight: 'auto', marginLeft: 'auto', backgroundColor: '#e04136'}} startIcon={<DownloadIcon />}>
                    Télécharger CV
                </Button>
            </CardActions>
        </Card>
    );
}

export default Home;
