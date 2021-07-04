
import './App.css';
import React,{useState,useEffect} from 'react'
// import Product from './components/Product/Product'
// import NavBar from './components/Navbar/Navbar'
import {Product,NavBar} from './components/common'
import {commerce} from './lib/Commerce';
// console.log(commerce);
function App() {

   const [products,setproducts] = useState([]); 
   const [cart,setcart] = useState()

   const fetchProduct = async ()=>{    
        console.log(commerce) 
      const {data} = await commerce.products.list();
      console.log(data);     
      setproducts(data);
   }

  const fetchCart = async()=>{
       const {data} = await commerce.cart.retrive();
       setcart(data)
  }
  const addToCart = (productid,)=>[

  ]

   useEffect(()=>{            
        fetchProduct();
        fetchCart()
   },[])   

  
  return (
    <div className="App">      
         <Product products={products}></Product>                
         <NavBar></NavBar>
    </div>
  );
}

export default App;
