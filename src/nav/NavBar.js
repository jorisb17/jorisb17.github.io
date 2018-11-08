import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import Divider from "@material-ui/core/Divider/Divider";
import {firstList, secondList} from './tileData';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    }
};

const mapState = state => ({
    route: state.changeRoute.route
});

class NavBar extends React.Component{
    state = {
        openDrawer: false,
    };

    toggleDrawer = (open) =>{
        this.setState({openDrawer: open});
    };

    render() {
        const {classes, route} = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{firstList}</List>
                <Divider />
                <List>{secondList}</List>
            </div>
        );
        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton onClick={() => this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            {route}
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={this.state.openDrawer} onClose={() => this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => this.toggleDrawer(false)}
                        onKeyDown={() => this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}


export default connect(mapState)(withStyles(styles)(NavBar));