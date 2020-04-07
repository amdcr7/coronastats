import React, {Fragment} from 'react';
import {AppBar, IconButton, Typography, Toolbar, Button, List  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    'text-align': 'center',
    'font-size' : 'smaller'
  },
});

export default function Footer(){
  const classes = useStyles();
    return (
        <React.Fragment>
          <footer className={classes.root}>© 2020 COVID-19 Information is not for offical purpose</footer>
        </React.Fragment>
        )
}
