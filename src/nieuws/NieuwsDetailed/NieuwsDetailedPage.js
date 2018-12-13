import React, {Component} from 'react';
import './NieuwsDetailedPage.css'
import {connect} from 'react-redux'
import {setRoute} from '../../nav/NavActions';
import {compose} from  'redux'
import DetailedLG from "./lg/DetailedLG";
import DetailedMD from "./md/DetailedMD";
import withWidth from '@material-ui/core/withWidth';
import DetailedSM from "./sm/DetailedSM";
import LoadingComponent from "../../Loading/LoadingComponent";

const actions = (dispatch) =>({
    onRouteChange: (route) => dispatch(setRoute(route))
});

const components = {
    sm: 'em',
    md: <DetailedMD/>,
    lg: <DetailedLG/>,
};

class NieuwsDetailedPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            article: [],
            isPending: true
        }
    }
     async componentDidMount(){
       let article = await fetch(`http://localhost:3000/nieuws/${this.props.match.params.id}`)
            .then(data => data.json());
       this.setState({article: article, isPending: false});
       this.props.onRouteChange("Nieuws")
    }

    getPageLayout(){
        const {title, date, author, description, image, text} = this.state.article;
        const {width} = this.props;
        switch (width) {
            case 'lg':
                console.log('LG');
                return <DetailedLG title={title} date={date} author={author} description={description} image={image} text={text}/>;
            case 'md':
                console.log("MD");
                return <DetailedMD title={title} date={date} author={author} description={description} image={image} text={text}/>;
            case 'sm':
                console.log("SM");
                return <DetailedSM title={title} date={date} author={author} description={description} image={image} text={text}/>;
            default:
                console.log('default');
                return <DetailedLG title={title} date={date} author={author} description={description} image={image} text={text}/>;
        }
    }

    render(){
        const {title, date, author, description, image, text, width} = this.state.article;
        console.log(width);
        const Component = <DetailedLG/>;
        return(
            <div>
                {this.state.isPending? <LoadingComponent/>: this.getPageLayout()}
            </div>
        );

    }
}

export default compose(
    withWidth(),
    connect(null, actions))(NieuwsDetailedPage);
