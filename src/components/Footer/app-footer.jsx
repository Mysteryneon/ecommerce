import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    height: "30px",
    padding: "10% 0",
    background: "#E5E4E2",
    bottom: "0",
    width: "100vw",
    textAlign: "center",
    ['@media (max-width: 1000px)']: {
      position: "fixed",
      padding: "20% 0",
    },
  },
  link: {
    color: "#36454F",
  }
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={3}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item>
              <Link to={"/"} className={classes.link}>
                Shop Items
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/aboutus"} className={classes.link}>
                About Us
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/contactus"} className={classes.link}>
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

