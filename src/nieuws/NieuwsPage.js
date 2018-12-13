import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRoute} from '../nav/NavActions';
import {requestNieuws} from './NieuwsActions';
import LoadingComponent from '../Loading/LoadingComponent';
import NieuwsList from './NieuwsList';

const mapState = state =>({
    nieuws: state.requestNieuws.nieuws,
    isPending: state.requestNieuws.isPending,
});

const actions = (dispatch) => ({
  onRouteChange: (route) => dispatch(setRoute(route)),
  onRequestNieuws: () => dispatch(requestNieuws())
});

class NieuwsPage extends Component{

     componentDidMount(){
        this.props.onRouteChange("Nieuws");
        this.props.onRequestNieuws();
        console.log(this.props.nieuws);
    }

    render(){
        return(
            <div>
              {this.props.isPending? <LoadingComponent/>
            : <NieuwsList nieuws={this.props.nieuws} />
        }
            </div>
        );

    }
}

export default connect(mapState, actions)(NieuwsPage)
