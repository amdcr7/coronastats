import React from 'react';
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import Footer from './Footer.js';
import {AppBar, IconButton, Typography, Toolbar, Button  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Dashboard />
      <Footer />
    </React.Fragment>
  );
}

export default App;
