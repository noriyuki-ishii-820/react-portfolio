import React from "react";
import { projects } from "./ProjectDetail";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));



function Projects() {

 const classes = useStyles();

  return (
    <div>
      <h1>portfolio page</h1>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {projects.map((each,i) => (
          <GridListTile key={i} cols={1}>
            <img src={each.screenshot.default}/>
            <p>{each.name}</p>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Projects;
