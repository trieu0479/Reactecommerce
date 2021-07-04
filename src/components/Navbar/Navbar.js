import React from 'react';
import LogoCommer from '../../assets/commerce.png'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons';
import useStyle from './style';

function Navbar() {
    const classes = useStyle();
    return (
        <AppBar position='fixed' className={classes.appBar} color='inherit' >
            <Toolbar>
               <Typography variant='h6' className={classes.title} color='inherit'>
                   <img src={LogoCommer} alt='Commerce.js' height='25px' className={classes.image}/>                       
                      Book Store                                           
               </Typography>               
               <div className={classes.grow}></div>
               <div className={classes.button}>
                   <IconButton aria-label='Add Cart'>
                       <Badge badgeContent={10} color="primary" >
                           <ShoppingCart></ShoppingCart>
                       </Badge>
                   </IconButton>
               </div>

            </Toolbar>            
        </AppBar>

    )
}

export default Navbar
