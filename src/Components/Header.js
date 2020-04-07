import React from 'react';
import {AppBar, IconButton, Typography, Toolbar, Button  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
      // <Header />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/*<MenuIcon />*/}
          </IconButton>
          <Typography variant="h5" className={classes.title} style={{flex: 1}}>
            COVID-19 (Corona virus)
          </Typography>
        </Toolbar>        
      </AppBar>
  );
}