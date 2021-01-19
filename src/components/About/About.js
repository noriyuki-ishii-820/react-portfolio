import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./About.css"
import { FaReact, FaNode} from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { skills } from "./Skill"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    },
}));

function About() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="headers">
        <h5 className="subheading">SKILLS</h5>
        <h1>What I Offer</h1>
      </div>

      <div className={classes.root}>
        <Grid container >
          <Grid item xs={8} className="aboutCard" >
            <Paper className={classes.paper} >
                <h1 className="cardHeader">about me</h1>
                <p className="skillIcons"><FaReact /> <FaNode /> <SiJavascript /></p>
                <p>
                    I am a <strong>full-stack web developer</strong> based in <strong>Sydney, Australia.</strong> 
                     With the proven background as a sales professional, I build things on the internet 
                    that are <strong>customer-focused, creative and competitive. </strong> 
                </p>
                <p>
                    Currently going through a certificate in
                    full-stack web development at the University of Sydney and have
                    earned another in front end web development from the General
                    Assembly. Strengths in teamwork and building projects from
                    ideation to execution.
                </p>
                <p>
                    Bilingual in English and Japanese with experience in
                    international collaboration.
                </p>

                <p>
                    Please find my resume <a href="https://drive.google.com/file/d/182iARkPasr5Q6CkNw3RQLOPMBdPq565N/view?usp=sharing" target="_blank">here.</a>
                </p>
            </Paper>
          </Grid>

          <Grid item xs={8} className="aboutCard skillCard" >
            <Paper className={classes.paper} >
                <h1 className="cardHeader">skill sets</h1>
                <div class="row">
                {skills.map((each, i) => {
                    return <div key={i} className="col-sm-12 col-md-6 col-lg-3 skill-icons" >
                        <p>{each.icon}</p>
                        <h4>{each.name}</h4>
                        <p>{each.sets}</p>
                    </div>
                })}
                </div>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default About;
