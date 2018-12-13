import React, {Component} from 'react'
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Divider from "@material-ui/core/Divider/Divider";
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
});

class DetailedMD extends Component{
    render() {
        const {title, date, author, description, image, text, classes} = this.props;
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component={'img'}
                        className={classes.media}
                        height={'300'}
                        src={image}
                        title="Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            <b>{title}</b>
                        </Typography>
                        <Typography component="p">
                            <b>{description}</b>
                        </Typography>
                        <br/>
                        <Divider/>
                        <br/>
                        <Typography component="p">
                            {text}
                        </Typography>
                        <br/>
                        <Divider/>
                        <br/>
                        <Typography component="p" style={{'color': '#9E9E9E'}}>
                            Door: {author}
                        </Typography>
                        <Typography component="p" style={{'color': '#9E9E9E'}}>
                            {date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{"textDecoration": 'none'}} to={`/nieuws/`}>
                        <Button className={'link'} size="small" color="primary">
                            terug
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(DetailedMD);