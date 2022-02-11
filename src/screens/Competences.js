import * as React from 'react';
import '../App.css';

const competences = [
    {"title": "C#", "pourcentage":"90", "colorstroke": "44", "category": "language"},
    {"title": ".NET", "pourcentage":"85", "colorstroke": "60", "category": "language"},
    {"title": "SQL Server", "pourcentage":"80", "colorstroke": "75", "category": "language"},
    {"title": "Javascript", "pourcentage":"70", "colorstroke": "100", "category": "language"},
    {"title": "React JS", "pourcentage":"60", "colorstroke": "150", "category": "language"},
    {"title": "Visual Studio", "pourcentage":"90", "colorstroke": "44", "category": "tool"},
    {"title": "Azure Devops", "pourcentage":"75", "colorstroke": "85", "category": "tool"},
    {"title": "Git", "pourcentage":"70", "colorstroke": "100", "category": "tool"},
    {"title": "NAO", "pourcentage":"70", "colorstroke": "100", "category": "tool"},
    {"title": "Unity", "pourcentage":"65", "colorstroke": "125", "category": "tool"},
            ];

function Competences() {
    return (
        <div className="App-header">
            <h2>Langages</h2>
            <div className="Competences">
                {competences.map((comp) => (
                    RenderCompetenceCategory(comp, 'language')
                ))}
            </div>
            <h2>Outils</h2>
            <div className="Competences">
                {competences.map((comp) => (
                    RenderCompetenceCategory(comp, 'tool')
                ))}
            </div>
        </div>
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
                        <h2>{comp.pourcentage}<span>%</span></h2>
                        </div>
                </div>
                    <h2 className="text">{comp.title}</h2>
                </div>
            </div>)
    }
}

export default Competences;
