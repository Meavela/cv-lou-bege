import React  from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import '../App.css';
import $ from 'jquery';
import { Link } from "react-router-dom";
import {Grid, Box, Button} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThemeColor from '../screens/Theme';
import Traduction from '../screens/Traduction';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const pages = [{"url": "/cv-lou-bege/", "title":"A propos"},
                {"url": "/cv-lou-bege/formations", "title":"Formations"},
                {"url": "/cv-lou-bege/experiences", "title":"Expériences"},
                {"url": "/cv-lou-bege/competences", "title":"Compétences"},
                {"url": "/cv-lou-bege/realisations", "title":"Réalisations"},
            ];

function Navigation() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className="AppBar">
            <Container maxWidth="xl">
                <Toolbar disableGutters className='FullScreen'>
                    <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                        <Grid container >
                            {pages.map((page) => (
                                    <Grid item xs={2} key={page.url}>
                                        <Link to={page.url} className="AppBar-ComponentNavigation">{page.title}</Link >
                                    </Grid>
                            ))}
                        </Grid>
                    </Box>
                    
                    {/* <Grid item xs={2}>  */}
                        {/* <ThemeColor></ThemeColor> */}
                        {/* <Traduction></Traduction> */}
                    {/* </Grid> */}
                </Toolbar>
                <Toolbar disableGutters className='ReduceScreen'>
                    <Grid item xs={12}> 
                        <Button variant="contained" style={{width: '20vw', color:"white", fontSize:'2.5vw', backgroundColor:"#373d49"}} onClick={handleMenu} aria-controls="menu-appbar" >
                            Menu <ExpandMoreIcon fontSize="large"></ExpandMoreIcon>
                            </Button>
                    </Grid>
                    {/* <Grid item xs={2}> */}
                        {/* <Traduction></Traduction> */}
                    {/* </Grid> */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {pages.map((page) => (
                            <MenuItem onClick={handleClose} key={page.url} ><Link to={page.url}>{page.title}</Link ></MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const styles = [{

}];

export default Navigation;
