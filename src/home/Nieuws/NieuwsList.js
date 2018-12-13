import React from 'react';
import NieuwsCard from "../../nieuws/NieuwsCard/NieuwsCard";
import {Link} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class NieuwsList extends React.Component{
    render() {
        const {classes, nieuws} = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item sm={12} lg={4}>
                    <NieuwsCard id={nieuws[0].id} title={nieuws[0].title} img={nieuws[0].image} date={nieuws[0].date}
                                author={nieuws[0].author} description={nieuws[0].description}/>
                </Grid>
                <Grid item sm={12} lg={4}>
                    <NieuwsCard id={nieuws[1].id} title={nieuws[1].title} img={nieuws[1].image} date={nieuws[1].date}
                                author={nieuws[1].author} description={nieuws[1].description}/>
                </Grid>
                <Grid item sm={12} lg={4}>
                    <NieuwsCard id={nieuws[2].id} title={nieuws[2].title} img={nieuws[2].image} date={nieuws[2].date}
                                author={nieuws[2].author} description={nieuws[2].description}/>
                </Grid>
                <Grid item sm={12} lg={3}>
                    <Link style={{"textDecoration": 'none'}} to={'/nieuws'}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Meer nieuws
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(NieuwsList);