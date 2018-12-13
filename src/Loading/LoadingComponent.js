import React, {Component} from 'react';
import './LoadingComponent.css';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';
import {setRoute} from '../nav/NavActions';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const actions = dispatch => ({
  onRouteChange: (route) => dispatch(setRoute(route))
});

class LoadingComponent extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className="loading">
                <CircularProgress className={classes.progress} size={50} color="secondary"/>
            </div>
        );
    }
}

export default withStyles(styles)(connect(null, actions)(LoadingComponent));