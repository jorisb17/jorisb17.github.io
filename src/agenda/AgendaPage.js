import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setRoute} from "../nav/NavActions";
import BigCalendar from 'react-big-calendar-like-google'
import moment from 'moment';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';

import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles'

const localizer = BigCalendar.momentLocalizer(moment);

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const mapState = state =>({
    events: state.requestEvents.events
});

const actions = (dispatch) =>({
    onRouteChange: (route) => dispatch(setRoute(route))
});

const events = [
    {
        title: 'test',
        start: moment().add(1, 'days').subtract(5, 'hours').toDate(),
        end: moment().add(1, 'days').subtract(4, 'hours').toDate(),
        allDay: false
    },
    {
        title: 'test larger',
        start: moment().startOf('day').add(5, 'hours').toDate(),
        end: moment().startOf('day').add(10, 'hours').toDate(),
        allDay: false
    },

    {
        title: 'test larger',
        start: moment().startOf('day').add(15, 'hours').toDate(),
        end: moment().startOf('day').add(23, 'hours').toDate(),
        allDay: false
    },
    {
        title: 'test all day',
        start: moment().toDate(),
        end: moment().toDate(),
        allDay: true
    }];



class AgendaPage extends Component{

    componentDidMount(){
        this.props.onRouteChange("Agenda");
    }


    render(){
        return(
          <div style={{'height': '700px'}}>
              <Paper style={{'height': '100%'}} elevation={1}>
                  <BigCalendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  />
              </Paper>
          </div>
        );
    }
}

export default withStyles(styles)(connect(null, actions)(AgendaPage));