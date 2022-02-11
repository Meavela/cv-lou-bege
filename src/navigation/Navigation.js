import React  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import '../App.css';
import { Link } from "react-router-dom";
import {Grid, Box} from '@mui/material';
import ThemeColor from '../screens/Theme';

const pages = [{"url": "/cv-lou-bege/", "title":"A propos"},
                {"url": "/cv-lou-bege/formations", "title":"Formations"},
                {"url": "/cv-lou-bege/experiences", "title":"Expériences"},
                {"url": "/cv-lou-bege/competences", "title":"Compétences"},
                {"url": "/cv-lou-bege/realisations", "title":"Réalisations"},
            ];

function Navigation() {
    return (
        <AppBar className="App">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                        <Grid container >
                            {pages.map((page) => (
                                    <Grid item xs={2} key={page.url}>
                                        <Link to={page.url} className="componentNavigation">{page.title}</Link >
                                    </Grid>
                            ))}
                        </Grid>
                    </Box>
                    
                    <Grid item xs={2}>
                        <ThemeColor></ThemeColor>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;
