import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

//icons
import HomeIcon from '@material-ui/icons/Home'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import EventIcon from '@material-ui/icons/Event'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import FaceIcon from '@material-ui/icons/Face'
import NavigationIcon from '@material-ui/icons/Navigation'
import PermContactCalanderIcon from '@material-ui/icons/PermContactCalendar'

export const firstList = (
    <div >
        <Link style={{"textDecoration": 'none'}} to={"/"}>
            <ListItem button >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link style={{"textDecoration": 'none'}} to={"/nieuws"}>
            <ListItem button >
                <ListItemIcon>
                    <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Nieuws" />
            </ListItem>
        </Link>
        <Link style={{"textDecoration": 'none'}} to={'/agenda'}>
            <ListItem button >
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Agenda" />
            </ListItem>
        </Link>
        <ListItem button>
            <ListItemIcon>
                <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Over ons" />
        </ListItem>
        <ListItem button >
            <ListItemIcon>
                <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Jongeren" />
        </ListItem>
    </div>
);

export const secondList = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <NavigationIcon />
            </ListItemIcon>
            <ListItemText primary="Routebeschrijving" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PermContactCalanderIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItem>
    </div>
);
