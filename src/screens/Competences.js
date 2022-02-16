import * as React from 'react';
import {Grid} from '@mui/material';
import '../App.css';

const competences = [
    {"id":"0","title": "C#", "pourcentage":"A", "colorstroke": "44", "category": "language"},
    {"id":"1","title": ".NET", "pourcentage":"A", "colorstroke": "60", "category": "language"},
    {"id":"2","title": "SQL Server", "pourcentage":"A", "colorstroke": "75", "category": "language"},
    {"id":"3","title": "Javascript", "pourcentage":"B", "colorstroke": "100", "category": "language"},
    {"id":"4","title": "React JS", "pourcentage":"B", "colorstroke": "150", "category": "language"},
    {"id":"5","title": "Visual Studio", "pourcentage":"A", "colorstroke": "44", "category": "tool"},
    {"id":"6","title": "Azure Devops", "pourcentage":"B", "colorstroke": "85", "category": "tool"},
    {"id":"7","title": "NAO", "pourcentage":"B", "colorstroke": "100", "category": "tool"},
    {"id":"8","title": "Unity", "pourcentage":"C", "colorstroke": "125", "category": "tool"},
    {"id":"9","title": "Git", "pourcentage":"C", "colorstroke": "222", "category": "tool"},
            ];

const reduceCompetences = [
    {"id":"0","title": "C#", "pourcentage":"A", "colorstroke": "200", "category": "language"},
    {"id":"1","title": ".NET", "pourcentage":"A", "colorstroke": "220", "category": "language"},
    {"id":"2","title": "SQL Server", "pourcentage":"A", "colorstroke": "230", "category": "language"},
    {"id":"3","title": "Javascript", "pourcentage":"B", "colorstroke": "250", "category": "language"},
    {"id":"4","title": "React JS", "pourcentage":"B", "colorstroke": "270", "category": "language"},
    {"id":"5","title": "VStudio", "pourcentage":"A", "colorstroke": "200", "category": "tool"},
    {"id":"6","title": "Azure", "pourcentage":"B", "colorstroke": "240", "category": "tool"},
    {"id":"7","title": "NAO", "pourcentage":"B", "colorstroke": "250", "category": "tool"},
    {"id":"8","title": "Unity", "pourcentage":"C", "colorstroke": "275", "category": "tool"},
    {"id":"9","title": "Git", "pourcentage":"C", "colorstroke": "300", "category": "tool"},
            ];

function Competences() {
    return (
        <Grid className="App-header">
            <Grid item style={{zIndex: "15"}}>
                <h2 className='Page-Top-Title'>Langages</h2>
                <Grid item className="Competences">
                    {competences.map((comp) => (
                        RenderCompetenceCategory(comp, 'language')
                    ))}
                </Grid>
                <h2 style={{textAlign: "center"}}>Outils</h2>
                <Grid item className="Competences">
                    {competences.map((comp) => (
                        RenderCompetenceCategory(comp, 'tool')
                    ))}
                </Grid>
            </Grid>
            <footer style={{position: "fixed", bottom: "0", width: "100%", backgroundColor: "#282c34", zIndex: "99"}}>            
                <Grid className="Legend-Competences">
                    <Grid item className="Legend-Competences-Details">
                        A : Maitrise
                    </Grid>
                    <Grid item className="Legend-Competences-Details">
                        B : Compétences professionnelles
                    </Grid>
                    <Grid item className="Legend-Competences-Details">
                        C : Compétences professionnelles limitées
                    </Grid>
                    <Grid item className="Legend-Competences-Details">
                        D : Notions
                    </Grid>
                </Grid>
            </footer>
        </Grid>
    );
}

function RenderCompetenceCategory(comp, categorySelected){
    function ShorterComp(idComp){
        return reduceCompetences.find(x => x.id === idComp);
    }
    if(comp.category === categorySelected){
        return ( <div className="card" key={comp.title}>
                    <div className="box">
                    <div className="percent">
                        <svg className='reduce' >
                            <circle cx="45" cy="45" r="45"></circle>
                            <circle cx="45" cy="45" r="45" style={{strokeDashoffset:ShorterComp(comp.id).colorstroke, stroke: '#e04136'}}></circle>
                        </svg>
                        <svg className='full' >
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70" style={{strokeDashoffset:comp.colorstroke, stroke: '#e04136'}}></circle>
                        </svg>
                        <div className="num">
                            <h2>{comp.pourcentage}</h2>
                        </div>
                    </div>
                    <h2 className="text reduce">
                        {ShorterComp(comp.id).title}
                    </h2>
                    <h2 className="text full">{comp.title}</h2>
                </div>
            </div>)
    }
}

export default Competences;
