import React from 'react'
import {
  Card, CardMedia, CardContent, CardActions, Typography, IconButton, ButtonBase
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {AddShoppingCart} from '@material-ui/icons';
import {Navigate, useLocation} from 'react-router-dom';

import useStyles from './styles';

const ProductDetails = ({onAddToCart}) => {
  const location = useLocation()
  const classes = useStyles();

  if (!location.state) {
    return <Navigate to={"/"}/>;
  }
  const {product} = location.state;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={product.image.url} title={product.name}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product.name}
                </Typography>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" gutterBottom/>
                <Typography variant="body2" color="textSecondary">
                  ID: {product.id}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{product.price.formatted_with_symbol}</Typography>
              <CardActions distableSpacing className={classes.CardActions}>
              <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <AddShoppingCart/>
              </IconButton>
            </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    // <div>
    //   <CardMedia className={classes.media} image={product.assets[0].url} title={product.name}/>
    //   <Card className={classes.root}>
    //   <CardContent>
    //     <div className={classes.cardContent}>
    //       <Typography variant="h5" gutterBottom>
    //         {product.name}
    //       </Typography>
    //       <Typography variant="h5">
    //         {product.price.formatted_with_symbol}
    //       </Typography>
    //     </div>
    //     <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
    //   </CardContent>
    //   <CardActions distableSpacing className={classes.CardActions}>
    //     <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
    //       <AddShoppingCart/>
    //     </IconButton>
    //   </CardActions>
    // </Card>
    // </div>
  );
}

export default ProductDetails;

