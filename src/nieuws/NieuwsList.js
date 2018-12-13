import React from 'react';
import Grid from '@material-ui/core/Grid';
import NieuwsCard from './NieuwsCard/NieuwsCard'

const NieuwsList = ({nieuws}) =>{
  return(
    <Grid container spacing={16}>
      {nieuws.map(article => {
        return (
          <Grid key={article.id} item lg={4}>
            <NieuwsCard
              id={article.id}
              title={article.title}
              date={article.date}
              author={article.author}
              img={article.image}
              description={article.description}
               />
          </Grid>
        )
      })}
    </Grid>
  )
};

export default NieuwsList;
