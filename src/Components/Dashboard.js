import React, {Component, Fragment} from 'react';
import RightPane from './RightPane.js';
import LeftPane from './LeftPane.js';
import {AppBar, IconButton, Typography, Toolbar, Button  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import _ from 'lodash';

const styles = {
    Paper: {padding: 20, marginBottom: 10, height : 450, overflowY:"auto"},
}
export default class Dashborad extends Component {
    state = {
        covidData: [],
        countries : null,
        globalData: {},
        selectedCountry : "World-Wide",
        sortedData: [],
        isDataReceived: false
    }

    componentDidMount = () => { 
        let self = this;
        axios.get(`https://api.covid19api.com/summary`)
        .then(function(response) {
            var chars = response.data.Countries;
            chars = _.orderBy(chars, ['TotalConfirmed'],['asc']); // Use Lodash to sort array by 'name'
            chars = chars.reverse().slice(0, 5);
          self.setState({
                covidData: response.data.Global,
                countries: response.data.Countries,
                globalData: response.data.Global,
                sortedData: chars,
                isDataReceived: true
            })
        })
        .catch( function (error){
          console.log(error);
        })
    }

    render(){
    return (
        <React.Fragment>
            <Grid container>
                    <Grid item xs>
                        <Paper style={styles.Paper}>
                            {this.state.isDataReceived && 
                                <LeftPane 
                                    mostAffect = {this.state.sortedData}
                                />
                            }
                        </Paper>          
                    </Grid>
                    <Grid item xs>
                        <Paper style={styles.Paper}>
                        {
                            this.state.isDataReceived && 
                            <RightPane 
                                data = {this.state.covidData} 
                                countries = {this.state.countries} 
                                countryName = {this.state.selectedCountry}
                            />
                        }
                        </Paper>          
                    </Grid>
            </Grid>
        </React.Fragment>
    )
}
        
    }
    

