import React from "react";
import { projects } from "./ProjectDetail";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    cardRoot: {
      maxWidth: 345,
    },
  });

function Projects() {

 const classes = useStyles();

  return (
    <div>
      <h1>portfolio page</h1>
      <Card className={classes.cardRoot}>
        <CardActionArea>
            {projects.map((each,i) => (
                <div>
                    <CardMedia key={i} component="img" image={each.screenshot.default} />
                    <CardContent>
                        <h1>{each.name}</h1>
                    </CardContent>
                </div>
            ))}
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Projects;
