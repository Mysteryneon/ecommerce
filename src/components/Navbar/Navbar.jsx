import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons' ;
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/logo.jpg'
import useStyles from './styles';


const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

  return (
   <> 
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component = {Link} to ="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Freshdrip.js" height="25px" className={classes.image} /> 
                    Driptech
                </Typography>
                <IconButton component = {Link} to ="/aboutus" aria-label="about us" color="inherit">About us </IconButton>
                <IconButton component = {Link} to ="/contactus" aria-label="Contact us" color="inherit">Contact us </IconButton>
                <div className={classes.grow}/>
                {location.pathname !== '/cart' && (
                <div className={classes.button}>
                    <IconButton component = {Link} to ="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent ={totalItems} color="secondary" >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div> )}
            </Toolbar>
        </AppBar>
   </>
  )
}

export default Navbar