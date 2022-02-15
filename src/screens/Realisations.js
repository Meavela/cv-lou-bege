import * as React from 'react';
import { Grid } from '@mui/material';
import '../App.css';

var listOfImages =[];
var listOfVideos =[];

class Realisations extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../assets/realisations', false, /\.(png)$/));
        listOfVideos = this.importAll(require.context('../assets/realisations', false, /\.(mp4)$/));
    }

    render(){
        return (
            <Grid className="App-header">
                <Grid item>
                    <h2 style={{textAlign: "center"}}>Images 3D</h2>
                    <Grid item className="Competences">
                    {
                        listOfImages.map((image, index) =>  
                            <Grid item className="Realisation-Details" key={index}> 
                                <img src={image} style={{width:"100%", borderRadius: "50px"}}></img>
                            </Grid>  
                        )
                    }
                    </Grid>
                    <h2 style={{textAlign: "center"}}>Animations 3D</h2>
                    <Grid item className="Competences">
                    {
                        listOfVideos.map((video, index) =>  
                            <Grid item className="Realisation-Details" key={index}> 
                                <video controls style={{width:"100%"}}>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </Grid>  
                        )
                    }
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Realisations;
