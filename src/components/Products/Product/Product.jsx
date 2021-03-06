import React from 'react';

import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';

import useStyles from './styles';

const Product = ({product, onAddToCart}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        className={classes.container}
        to={"/details"}
        state={{ product: product }}
      >
        <CardMedia className={classes.media} image={product.assets[0].url} title={product.name}/>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
        </CardContent>
      </Link>

      <CardActions distableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product 