import React,{Component} from 'react';
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import Footer from './Footer.js';
import {AppBar, IconButton, Typography, Toolbar, Button  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class App extends Component {
  state = {
    defaultView: true,
    mapView: false
  }

  toggleView = (view) => {
    this.setState({
      defaultView: view.defaultView,
      mapView: view.mapView
    })
  }
  render(){
    return (
      <React.Fragment>
        <Header onToggle = {this.toggleView}/>
        <Dashboard view = {this.state} />
        <Footer />
      </React.Fragment>
  )}
}
