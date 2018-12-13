import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import './NieuwsForm.css'
import {Editor, EditorState} from 'draft-js';
import {setRoute} from '../../nav/NavActions';

import Paper from '@material-ui/core/Paper';
import { DatePicker } from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    button: {
        margin: theme.spacing.unit * 3,
    },
});

const actions = dispatch => ({
    onRouteChange: (route) => dispatch(setRoute(route))
});

class NieuwsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            date: new Date(),
            author: '',
            editorState: EditorState.createEmpty(),
            image: ''
        };
        this.onChange = (editorState) => this.setState({editorState});
    }


    onSubmit = () => {
        // fetch('http://localhost:3000/createNieuws', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         title: this.state.title,
        //         description: this.state.description,
        //         date: this.state.date,
        //         author: this.state.author,
        //         text: this.state.text,
        //         image: this.state.image
        //     })
        // })
        //     .then(response => response.json())
        //     .then(article => {
        //         if (article) {
        //             console.log("succes");
        //             this.setState({
        //                 title: '',
        //                 description: '',
        //                 date: new Date(),
        //                 author: '',
        //                 text: '',
        //                 image: ''
        //             })
        //         }
        //     })

        console.log(this.state.editorState);
    };

    componentDidMount(){
        this.props.onRouteChange('Create');
        this.setState({
            title: '',
            description: '',
            date: new Date(),
            author: '',
            text: '',
            image: ''
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleDateChange = date => {
        this.setState({ date: date });
    };

    onTextChange = (editorState) => this.setState({editorState});

    render() {
        const {classes} = this.props;
        return (
            <Paper className={'picker'}>
                <form className={classes.container} noValidate autoComplete='off'>
                    <TextField
                        id="standard-name"
                        label="Titel"
                        className='picker'
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Auteur"
                        className='picker'
                        value={this.state.author}
                        onChange={this.handleChange('author')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Afbeelding"
                        className='picker'
                        value={this.state.image}
                        onChange={this.handleChange('image')}
                        margin="normal"
                    />
                    <div className={'picker'}>
                        <DatePicker
                            autoOk
                            label="Datum"
                            showTodayButton
                            maxDateMessage="Date must be less than today"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                        />
                    </div>
                    <TextField
                        id="standard-full-width"
                        label="Omschrijving"
                        style={{ margin: 8 }}
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        placeholder="Omschrijving"
                        multiline
                        rowsMax="100"
                        className='picker'
                        margin="normal"
                    />
                    <div className={'picker editor'}>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={this.onChange}
                            readOnly={false}
                        />
                    </div>
                    <Button disabled={false} onClick={() => this.onSubmit()} variant="contained" color="primary" className={classes.button}>
                        Create
                    </Button>
                </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(connect(null, actions)(NieuwsForm));