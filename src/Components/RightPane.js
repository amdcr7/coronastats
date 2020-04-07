import React, {Component, Fragment} from 'react';
import {AppBar, IconButton, Typography, Toolbar, Button  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Delimiter from './Delimiter.js';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    },
    death: {
        color: 'red'
    },
    recover: {
        color: 'green'
    },
    confirm : {
        color: 'black'
    }
}
export default class RightPane extends Component {
    state = {
        countries:this.props.countries,
        covidData:this.props.data,
        selectedCountry : "World-Wide",
        globalDataBackup: this.props.data,
    }
    componentDidMount = () => {
        this.setState({
            countries: this.props.countries,
            globalDataBackup: this.props.data,
            covidData: this.props.data
        })
    }
    handleChange = (event) => {
        this.setState({
            selectedCountry: event.target.value
        }, () => {this.filterSelectedCountryData()})
    }
    filterSelectedCountryData = () => {
        if(this.state.selectedCountry === "World-Wide"){
            this.getSelectedCountryDetails("World-Wide")
        } else {
            const selected = this.state.countries.filter(item => item.Country === this.state.selectedCountry);
            this.getSelectedCountryDetails(selected);
        }
    }

    getSelectedCountryDetails = (selectedCountry) => { 
        if(selectedCountry === "World-Wide"){
           this.setState({
                covidData: this.state.globalDataBackup,
                selectedCountry: "World-Wide"
            }) 
        } else {
            const temp = Object.assign(...selectedCountry)       
            this.setState({
                covidData: temp,
                selectedCountry: temp.Country 
            })
        }
    }
    render(){
    return (
        <React.Fragment>
            <div>
                {/*<Typography variant="h5"> 
                    {countryName}
                </Typography>*/}
            </div>
                <div>                
                    <FormControl>
                        <InputLabel>Countries</InputLabel>
                        <Select
                            labelId="Muscles"
                            id="demo-simple-select"
                            value = {this.state.selectedCountry}  
                            onChange = {this.handleChange}                      
                            style={{width:200}}
                        >
                        <MenuItem value={"World-Wide"}>{"World-Wide"}</MenuItem>
                        <br />
                        {this.state.countries.map( country => 
                            <MenuItem value={country.Country}>{country.Country}</MenuItem>
                        )}
                        </Select>
                    </FormControl>
                </div>
            <List style={styles.root}>
                <ListItem button>
                    <ListItemText id={0} primary={`New Confirmed`} />
                    <ListItemSecondaryAction>
                          <b><Delimiter number={this.state.covidData.NewConfirmed}/>  </b>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText id={1} primary={`Total Confirmed`} />
                    <ListItemSecondaryAction>
                            <b><Delimiter number={this.state.covidData.TotalConfirmed} /></b>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText id={2} primary={`New Recovered`} />
                    <ListItemSecondaryAction style={styles.recover}>
                            <b><Delimiter number={this.state.covidData.NewRecovered} /></b>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText id={3} primary={`Total Recovered`} />
                    <ListItemSecondaryAction style={styles.recover}>
                           <b> <Delimiter number={this.state.covidData.TotalRecovered} /></b>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText id={4} primary={`New Deaths`} />
                    <ListItemSecondaryAction style={styles.death}>
                           <b> <Delimiter number={this.state.covidData.NewDeaths} /></b>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText id={5} primary={`Total Deaths`} />
                    <ListItemSecondaryAction style={styles.death}>
                           <b> <Delimiter number= {this.state.covidData.TotalDeaths} /></b>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </List>
        </React.Fragment>
    )
}
} 

