import React, {Component, Fragment} from 'react';
import RightPane from './RightPane.js';
import {AppBar, IconButton, Typography, Toolbar, Button  }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Delimiter from './Delimiter.js';

const styles = {
    firstBox : {
        height: 50
    },
    root: {
        width: '100%',
        maxWidth: 360,
    }
}
export default class LeftPane extends Component {
    state = {
        countries: [],
        selectedCountry : "World-Wide"
    }

    componentDidMount = () => {
        this.setState({
            countries: this.props.countries
        })
    }
    render(){
    return (
        <React.Fragment>
            <div>
                <Typography variant="h6">
                       <b> Most Affected Countries:</b>
                </Typography>
                <List style={styles.root}>
                    {this.props.mostAffect.map((item, index) => {
                        return(
                            <React.Fragment>
                             <ListItem key={index + 1} button>
                                <ListItemText id={index} primary={item.Country} />
                                <ListItemSecondaryAction>
                                     <b> <Delimiter number= {item.TotalConfirmed} />  </b>
                                </ListItemSecondaryAction>
                            </ListItem>
                                <Divider />
                             </React.Fragment>
                            ) 
                    })}
                </List>
            </div>
        </React.Fragment>
    )
}
}
    

