import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  root: theme.mixins.gutters({
    height: '99.5%'
  }),
});

function HomeCard(props) {
  const { classes } = props;
    return <div className='h-100'>
        <Paper className={classes.root} elevation={1}>
            <List>
                <ListItem>
                    <Typography variant="h2">
                        {props.title}
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5">
                        {props.text}
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem>
                    <Typography component="p">
                        DGZ Bussum-Naarden
                    </Typography>
                </ListItem>
            </List>
        </Paper>
    </div>;
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeCard);
