import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRoute} from '../nav/NavActions';

const mapState = state =>({
    route: state.changeRoute.route
});

const actions = (dispatch) => ({
  onRouteChange: (route) => dispatch(setRoute(route))
});

class NieuwsPage extends Component{

    componentDidMount(){
        this.props.onRouteChange("Nieuws");
    }

    render(){
        return(
            <h1>Nieuws Pagina</h1>
        );

    }
}

export default connect(mapState, actions)(NieuwsPage)