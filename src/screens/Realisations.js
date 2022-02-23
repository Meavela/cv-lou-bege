import * as React from 'react';
import { Grid } from '@mui/material';
import '../App.css';
import * as Animations from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

var listOfImages =[];
var listOfVideos =[];

const styles = StyleSheet.create({
    imageAnimation: {
        animationName: Animations.rotateIn,
        animationDuration: '1s'
    }
});

class Realisations extends React.Component {
    ////
    // Get the URL for each file in the folder
    // Call for each type of file
    // .mp4 , .png
    ////
    importAll(r) {
        return r.keys().map(r);
    }
    
    ////
    // Get the name of the file from the URL
    ////
    displayName(url){
        var split = url.split("/")[4].split(".")[0];
        return split;
    }

    constructor(props){
        super(props);
        listOfImages = this.importAll(require.context('../assets/realisations', false, /\.(png)$/));
        listOfVideos = this.importAll(require.context('../assets/realisations', false, /\.(mp4)$/));
    }

    render(){
        return (
            <Grid className="App-header" >
                <Grid item>
                    <h2 className='Page-Top-Title'>Images 3D</h2>
                    <Grid item className="Competences">
                    {
                        listOfImages.map((image, index) =>  
                            <Grid item className={css(styles.imageAnimation)+"Realisation-Details"} key={index}> 
                                <img src={image} className=" Realisation-Image" alt={image}></img>
                                <p style={{fontStyle: "italic", marginTop: "0"}}>{this.displayName(image)}</p>
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
                                <p style={{fontStyle: "italic", marginTop: "0"}}>{this.displayName(video)}</p>
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
