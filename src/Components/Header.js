import React, {Component} from 'react';
import {AppBar, IconButton, Typography, Toolbar, Button  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}

export default class Header extends Component {
  state = {
    defaultView: true,
    mapView: false
  }

  toggleView = () => {
    this.setState({
      defaultView: !this.state.defaultView,
    mapView: !this.state.mapView
    }, () => {this.props.onToggle(this.state)})
  }
render(){
  // const classes = useStyles();
  return (
      // <Header />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
            {/*<MenuIcon />*/}
          </IconButton>
          <Typography variant="h5" style={styles.title} style={{flex: 1}}>
            COVID-19 (Corona virus)
          </Typography>
          {this.state.defaultView && <Button 
            style={{color:'White'}}
            onClick = {this.toggleView}
            >
            Map View
          </Button>}
          {this.state.mapView && <Button 
            style={{color:'White'}}
            onClick = {this.toggleView}
            >
            Defualt View
          </Button>}
        </Toolbar>        
      </AppBar>
  );
}}