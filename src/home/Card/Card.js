import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  media: {
    objectFit: 'cover',
    paddingTop: '56.25%', // 16:9
  },
};

const SimpleMediaCard = (props) => {
  const { classes, img, title,  text} = props;
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Image"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Lees meer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(SimpleMediaCard);
