import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import './NieuwsForm.css'
import './Draft.css'
import {EditorState, RichUtils} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {setRoute} from '../../nav/NavActions';

import Paper from '@material-ui/core/Paper';
import { DatePicker } from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicIcon from '@material-ui/icons/FormatItalic';

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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
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
            text: EditorState.createEmpty(),
            image: ''
        };
        this.onChange = (editorState) => this.setState({editorState});
    }


    onSubmit = () => {
        fetch('http://localhost:3000/createNieuws', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                date: this.state.date,
                author: this.state.author,
                editorState: this.state.editorState,
                image: this.state.image
            })
        })
            .then(response => response.json())
            .then(article => {
                if (article) {
                    console.log("succes");
                    this.setState({
                        title: '',
                        description: '',
                        date: new Date(),
                        author: '',
                        text: '',
                        image: ''
                    })
                }
            })
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

    render() {
        const {classes} = this.props;
        return (
            <Paper className={'picker'}>
                <form className={classes.container} noValidate autoComplete='off'>
                    <Grid container spacing={8}>
                        <Grid item lg={3}>
                            <TextField
                                id="standard-name"
                                label="Titel"
                                className={classes.textField}
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                                style={{'margin-top': '19px'}}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item lg={3}>
                            <TextField
                                id="standard-name"
                                label="Auteur"
                                className={classes.textField}
                                value={this.state.author}
                                style={{'margin-top': '19px'}}
                                onChange={this.handleChange('author')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item lg={3}>
                            <TextField
                                id="standard-name"
                                label="Afbeelding"
                                className={classes.textField}
                                style={{'margin-top': '19px'}}
                                value={this.state.image}
                                onChange={this.handleChange('image')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item lg={3}>
                            <div className={classes.textField} style={{'margin-top': '19px'}}>
                                <DatePicker
                                    autoOk
                                    label="Datum"
                                    showTodayButton
                                    maxDateMessage="Date must be less than today"
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <TextField
                        id="standard-full-width"
                        label="Omschrijving"
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        placeholder="Omschrijving"
                        multiline
                        rowsMax="100"
                        className='picker'
                        margin="normal"
                    />
                    <div id='content' className={classes.textField} style={{'width': '100%'}}>
                        <div className='editor'>
                            <Editor
                                editorState={this.state.editorState}
                                onEditorStateChange={this.onChange}
                                spellCheck={true}
                                className={classes.textField}
                                readOnly={false}
                                localization={{
                                    locale: 'nl'
                                }}
                                toolbar={{
                                    fontFamily: {
                                        options: ['Roboto']
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <Button disabled={true} onClick={() => this.onSubmit()} variant="contained" color="primary" className={classes.button}>
                        Create
                    </Button>
                </form>
            </Paper>
        );
    }
}

export default withStyles(styles)(connect(null, actions)(NieuwsForm));