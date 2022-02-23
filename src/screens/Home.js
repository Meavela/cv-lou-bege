import * as React from 'react';
import logo from '../assets/img/lou_bege.jpg';
import cv from '../assets/img/CV_Lou_BEGE.pdf';
import { Card, CardContent, CardMedia, CardActions,Grid, Button, Container } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PositionIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import WebIcon from '@mui/icons-material/Language';
import * as Animations from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

function Home() {
    const styles = StyleSheet.create({
        cardAnimation: {
            animationName: Animations.bounceIn,
            animationDuration: '1s'
        },
        downloadAnimation: {
            animationName: Animations.rotateIn,
            animationDuration: '1s'
        }
    });

    return (
        <Container maxWidth="large" className={css(styles.cardAnimation)}>
        <Card className="Profile-Card">
            <CardMedia component="img" height="50vw" style={{backgroundColor: '#e04136'}} />
            <CardContent style={{paddingBottom: '0'}}>
                <Grid container spacing={1}>
                    <Grid item xs={4} style={{textAlign: 'center'}} >
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Grid>
                    <Grid item xs={8} className='Profile-Grid-Separation'>
                        <Grid item xs={12} className='Profile-Grid-Name'>
                            Lou BÉGÉ, <span className='Profile-Grid-Age'>22 ans</span>
                        </Grid>
                        <Grid item xs={12} className='Profile-Grid-Poste'>
                            Alternante développeuse .NET
                        </Grid>
                        <hr style={{width: '20vw', marginLeft: 0}}></hr>
                        <Grid item xs={12} className='Profile-Grid-Infos' style={{paddingTop: ".8vw"}}>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <WorkIcon className='Profile-Grid-Icons'></WorkIcon> ENTREPRISE
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                Hardis Group
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className='Profile-Grid-Infos'>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <PositionIcon className='Profile-Grid-Icons'></PositionIcon> VILLE
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                Grenoble
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className='Profile-Grid-Infos'>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <EmailIcon className='Profile-Grid-Icons'></EmailIcon> EMAIL
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                lou.bege@hotmail.com
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className='Profile-Grid-Infos'>
                            <Grid item xs={4} className='Profile-Grid-Infos-Item'>
                                <WebIcon className='Profile-Grid-Icons'></WebIcon> LINKEDIN
                            </Grid>
                            <Grid item xs={8} className='Profile-Grid-Infos-Details'>
                                <a href='https://linkedin.com/in/lou-bege/' target="_blank" rel="noopener noreferrer" style={{color: '#e04136'}}>linkedin.com/in/lou-bege/</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions style={{backgroundColor: 'white'}}>
                <Button size="large" className={css(styles.downloadAnimation)+" Profile-Download-Button"} variant="contained" href={cv} download="lou-bege-cv" startIcon={<DownloadIcon  className='Profile-Grid-Icons'/>}>
                    Télécharger CV
                </Button>
            </CardActions>
        </Card>
        </Container>
    );
}

export default Home;
