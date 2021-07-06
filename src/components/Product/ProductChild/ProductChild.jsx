import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,makeStyles, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './style';
import trasua from '../../../assets/toi-thay-hoa-vang-tren-co-xanh-4619-5701-1521549732.jpg'
function ProductChild({products}) {          
    const classes = useStyles();         
    return (   
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={products.media.source} title={products.name}></CardMedia>
            <CardContent>
                 <div className={classes.cardContent}>
                     <Typography variant='h5' gutterBottom>{products.name}</Typography> 
                     <Typography variant='h5' color="error">{products.price.formatted_with_code}</Typography> 
                 </div>
                <Typography align='left' color='primary' dis ></Typography>                  
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} disableSpacing >
                  <IconButton aria-label='Add Card'>
                      <AddShoppingCart></AddShoppingCart>
                  </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductChild
