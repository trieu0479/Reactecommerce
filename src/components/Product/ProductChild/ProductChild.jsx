import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,makeStyles, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './style';

function ProductChild({products,addtocart}) {          
    const classes = useStyles();  
    console.log(addtocart);
    function HandleAddCart(a,b){   
        console.log(a);  
        console.log(b);  
        addtocart(a,b);
    }
    return (   
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={products.media.source} title={products.name}></CardMedia>
            <CardContent>
                 <div className={classes.cardContent}>
                     <Typography variant='h5' gutterBottom>{products.name}</Typography> 
                     <Typography variant='h5' color="error">{products.price.formatted_with_code}</Typography> 
                 </div>
                <Typography dangerouslySetInnerHTML= {{__html: products.description}} align='left' color='primary'/>                
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} disableSpacing >
                  <IconButton aria-label='Add Card' onClick={(id,amount)=>HandleAddCart(products.id,amount)}>
                      <AddShoppingCart></AddShoppingCart>
                  </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductChild
