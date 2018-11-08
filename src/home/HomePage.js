import React, {Component} from "react";
import Grid from '@material-ui/core/Grid'
import {connect} from 'react-redux';
import ImageCarousel from "./ImageCarousel";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import {setRoute} from "../nav/NavActions";
import Card1 from './Card/Card'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const mapState = state => ({
    route: state.changeRoute.route
});
const actions = (dispatch) => ({
    onRouteChange: (route) => dispatch(setRoute(route))
});

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            wtext: 'We willen een levende christelijke geloofsgemeenschap zijn. Iedereen is welkom en mag zich bij ons thuisvoelen. Op deze site is informatie te vinden over onze gemeente, over onze diensten en andere activiteiten en over de doopsgezinden in het algemeen. Kijk gerust eens rond. En wil je eens komen kijken? Ons gebouw staat op de Wladimirlaan 10 in Bussum, vlak bij station Naarden-Bussum!',
            wtitle: 'Van harte welkom!',
            img1: "https://lh3.googleusercontent.com/fiAEOfejukuUcVYfV81-Dzlw119rn_m6eXEvHEkoeT8_0DJdzwWmis08Ch6V-0uW9sWNsALOedWZny4xy65Ix7Be0nODCxJ2e3t23uQY0zT5UrP5Q8uXMJyiHxA6juHtKcL51U2S73T8RoLtTQwiNEVV2nRKrd5QIsvRyjjHdwpamZBm2VDk-C3GlwSHmlb7Aw4a4wVVfe4ovoCCQ6H_d53GHBufOG18BE3o_6hVmzZqhNfssjE36SiJP8AmikoXhUskqgLZ2Q5w-5_2_tFc7tqLf7xrVZhLMoX6hRl6EGBpOF9b-7m8H5AIw59Y1s5I93oV1jTCK2EeiVxsC7kv_SK8kYZsadlALu_eDx15xN3ptnkno5ilqwquFFnx4FXMlm4vg-ci3SMK7_z_UsORjWJoln9WLigZgvNRCK__UP1jLzmIy2xhr2f66zpVfK7dUDREZ_AqWQVXjVlAJMacRz0xTwhi9wragWUU_tjZXqBfPSDRS5xije0kaTDlNrlYnvRgR8B3jtJnHA9tefgO3RL8X-h8IkYUEQNu8Oy5D2U8eTjryBOC7SbNg1NiP1NhMYKY6VEqM0mV4UFbqLTrqKAMZxorMFiOm684wRGoZEZk5FE3OSt-YZVIsOJBZh9nFABn20Luw_K1UtkboHgZ_yKZUywX_cR6NQ9EGcNL31TpdHxMjZ9aZtYoeLUSgDDBryyAjJaoazIO0qKLpZZN1_ZoWmVXi_V-nQY4=w1259-h944-no",
            title1: 'Lorem ipsum',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img2: "https://lh3.googleusercontent.com/fiAEOfejukuUcVYfV81-Dzlw119rn_m6eXEvHEkoeT8_0DJdzwWmis08Ch6V-0uW9sWNsALOedWZny4xy65Ix7Be0nODCxJ2e3t23uQY0zT5UrP5Q8uXMJyiHxA6juHtKcL51U2S73T8RoLtTQwiNEVV2nRKrd5QIsvRyjjHdwpamZBm2VDk-C3GlwSHmlb7Aw4a4wVVfe4ovoCCQ6H_d53GHBufOG18BE3o_6hVmzZqhNfssjE36SiJP8AmikoXhUskqgLZ2Q5w-5_2_tFc7tqLf7xrVZhLMoX6hRl6EGBpOF9b-7m8H5AIw59Y1s5I93oV1jTCK2EeiVxsC7kv_SK8kYZsadlALu_eDx15xN3ptnkno5ilqwquFFnx4FXMlm4vg-ci3SMK7_z_UsORjWJoln9WLigZgvNRCK__UP1jLzmIy2xhr2f66zpVfK7dUDREZ_AqWQVXjVlAJMacRz0xTwhi9wragWUU_tjZXqBfPSDRS5xije0kaTDlNrlYnvRgR8B3jtJnHA9tefgO3RL8X-h8IkYUEQNu8Oy5D2U8eTjryBOC7SbNg1NiP1NhMYKY6VEqM0mV4UFbqLTrqKAMZxorMFiOm684wRGoZEZk5FE3OSt-YZVIsOJBZh9nFABn20Luw_K1UtkboHgZ_yKZUywX_cR6NQ9EGcNL31TpdHxMjZ9aZtYoeLUSgDDBryyAjJaoazIO0qKLpZZN1_ZoWmVXi_V-nQY4=w1259-h944-no",
            title2: 'Lorem ipsum',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img3: 'https://lh3.googleusercontent.com/fiAEOfejukuUcVYfV81-Dzlw119rn_m6eXEvHEkoeT8_0DJdzwWmis08Ch6V-0uW9sWNsALOedWZny4xy65Ix7Be0nODCxJ2e3t23uQY0zT5UrP5Q8uXMJyiHxA6juHtKcL51U2S73T8RoLtTQwiNEVV2nRKrd5QIsvRyjjHdwpamZBm2VDk-C3GlwSHmlb7Aw4a4wVVfe4ovoCCQ6H_d53GHBufOG18BE3o_6hVmzZqhNfssjE36SiJP8AmikoXhUskqgLZ2Q5w-5_2_tFc7tqLf7xrVZhLMoX6hRl6EGBpOF9b-7m8H5AIw59Y1s5I93oV1jTCK2EeiVxsC7kv_SK8kYZsadlALu_eDx15xN3ptnkno5ilqwquFFnx4FXMlm4vg-ci3SMK7_z_UsORjWJoln9WLigZgvNRCK__UP1jLzmIy2xhr2f66zpVfK7dUDREZ_AqWQVXjVlAJMacRz0xTwhi9wragWUU_tjZXqBfPSDRS5xije0kaTDlNrlYnvRgR8B3jtJnHA9tefgO3RL8X-h8IkYUEQNu8Oy5D2U8eTjryBOC7SbNg1NiP1NhMYKY6VEqM0mV4UFbqLTrqKAMZxorMFiOm684wRGoZEZk5FE3OSt-YZVIsOJBZh9nFABn20Luw_K1UtkboHgZ_yKZUywX_cR6NQ9EGcNL31TpdHxMjZ9aZtYoeLUSgDDBryyAjJaoazIO0qKLpZZN1_ZoWmVXi_V-nQY4=w1259-h944-no',
            title3: 'Lorem ipsum',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
    }

    componentDidMount(){
        this.props.onRouteChange("Home");
    }

    render(){
        const {classes} = this.props;
        return(
            <Grid container spacing={8}>
                <Grid item xm={12} sm={12} md={12} lg={9}>
                    <ImageCarousel/>
                </Grid>
                <Grid item xm={12} sm={12} md={12} lg={3}>
                    <Paper className={classes.root} elevation={1} style={{"height": "100%"}}>
                        <Typography variant="h3" component="h3">
                            Welkom!
                        </Typography>
                        <br/>
                        <Divider/>
                        <br/>
                        <Typography component="p">
                            We willen een levende christelijke geloofsgemeenschap zijn. Iedereen is welkom en mag zich bij ons thuisvoelen.
                            Op deze site is informatie te vinden over onze gemeente, over onze diensten en andere activiteiten en over de doopsgezinden in het algemeen.
                            Kijk gerust eens rond. En wil je eens komen kijken?
                            Ons gebouw staat op de Wladimirlaan 10 in Bussum,
                            vlak bij station Naarden-Bussum!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xm={12} sm={12} md={4} lg={4}>
                    <Card1 img={this.state.img1} title={this.state.title1} text={this.state.text1}/>
                </Grid>
                <Grid item xm={12} sm={12} md={4} lg={4}>
                    <Card1 img={this.state.img2} title={this.state.title2} text={this.state.text2}/>
                </Grid>
                <Grid item xm={12} sm={12} md={4} lg={4}>
                    <Card1 img={this.state.img3} title={this.state.title3} text={this.state.text3}/>
                </Grid>
            </Grid>
        )
    }
}

export default connect(mapState, actions)(withStyles(styles)(HomePage));