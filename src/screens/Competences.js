import * as React from 'react';
import {Grid} from '@mui/material';
import '../App.css';

const competences = [
    {"title": "C#", "pourcentage":"A", "colorstroke": "44", "category": "language"},
    {"title": ".NET", "pourcentage":"A", "colorstroke": "60", "category": "language"},
    {"title": "SQL Server", "pourcentage":"A", "colorstroke": "75", "category": "language"},
    {"title": "Javascript", "pourcentage":"B", "colorstroke": "100", "category": "language"},
    {"title": "React JS", "pourcentage":"B", "colorstroke": "150", "category": "language"},
    {"title": "Visual Studio", "pourcentage":"A", "colorstroke": "44", "category": "tool"},
    {"title": "Azure Devops", "pourcentage":"B", "colorstroke": "85", "category": "tool"},
    {"title": "NAO", "pourcentage":"B", "colorstroke": "100", "category": "tool"},
    {"title": "Unity", "pourcentage":"C", "colorstroke": "125", "category": "tool"},
    {"title": "Git", "pourcentage":"C", "colorstroke": "222", "category": "tool"},
            ];

function Competences() {
    return (
        <Grid className="App-header">
            <Grid item style={{zIndex: "15"}}>
                <h2 style={{textAlign: "center"}}>Langages</h2>
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
    if(comp.category === categorySelected){
        return ( <div className="card" key={comp.title}>
                <div className="box">
                <div className="percent">
                    <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" style={{strokeDashoffset:comp.colorstroke, stroke: '#e04136'}}></circle>
                    </svg>
                        <div className="num">
                        <h2>{comp.pourcentage}</h2>
                        </div>
                </div>
                    <h2 className="text">{comp.title}</h2>
                </div>
            </div>)
    }
}

export default Competences;
