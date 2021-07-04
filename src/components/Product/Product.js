import React from 'react'
import Productchild  from './ProductChild/ProductChild'
import {Grid} from '@material-ui/core'
import useStyle from './style'

export default function Product({products}) {
 
 const classes =useStyle();  
 console.log(products)
    return (  
        <main className={classes.content}>
            <div className={classes.toolbar}>
            <Grid container justify='center' spacing={4} >
                    {
                    products.map((val,index)=>{                   
                    return ( 
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>                         
                            <Productchild products = {val} ></Productchild>                            
                    </Grid>
                        )
                    })                    
                    }
            </Grid>
            </div>
        </main>   

    )
}

