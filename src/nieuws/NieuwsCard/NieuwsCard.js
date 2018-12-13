import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typeography from '@material-ui/core'

const styles = {
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    paddingTop: '56.25%'
  },
};

function ImgMediaCard(props) {
  const { classes, title, date, author, description, img, id } = props;
  return (
    <Card style={{'height': '100%'}}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={img}
            title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
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
        <Link style={{"textDecoration": 'none'}} to={`/nieuws/${id}`}>
          <Button className={'link'} size="small" color="primary">
            Lees meer
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
