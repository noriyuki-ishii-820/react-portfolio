import React from "react";
import { projects } from "./ProjectDetail";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import "./Projects.css"

const useStyles = makeStyles({
    cardRoot: {
      maxWidth: "auto"
    },
  });

function Projects() {

 const classes = useStyles();

  return (
    <div className="container">
      <div className="headers">
        <h5 className="subheading">PORTFOLIO</h5>
        <h1>Recent Projects</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
        {projects.map((each,i) => (
          <Card className={classes.cardRoot} className="col-sm-5 card" >
                <CardMedia key={i} component="img" className="screenshot" image={each.screenshot.default} />
                <CardContent>
                    <h3>{each.name}</h3>
                    <p>{each.tech[0]} / {each.tech[1]} / {each.tech[2]}</p>
                    <p>{each.description}</p>
                    <p>
                      <a href={each.githubUrl} target="_blank" className="projectBtn"><button>GitHub</button></a>
                      <a href={each.deployUrl} target="_blank" className="projectBtn"><button>Open App</button></a>
                    </p>
                </CardContent>
          </Card>
          ))}
          </div>
      </div>
    </div>
  );
}

export default Projects;
