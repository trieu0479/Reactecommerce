
import './App.css';
import React,{useState,useEffect} from 'react'
// import Product from './components/Product/Product'
// import NavBar from './components/Navbar/Navbar'
import {Product,NavBar} from './components/common'
import {commerce} from './lib/Commerce';
// console.log(commerce);
function App() {

   const [products,setproducts] = useState([]); 
   const [cart,setcart] = useState('');

   const fetchProduct = async ()=>{         
      const {data} = await commerce.products.list();       
      setproducts(data);
   }

  const fetchCart = async()=>{
       const data = await commerce.cart.retrieve();     
       setcart(data);
  }

  const handleAddCart = async (productId,quantity)=>{
       console.log('cart');
       console.log(productId,quantity);
      const data = await commerce.cart.add(productId,quantity);        
      setcart(data)
      console.log(data);
      console.log(cart);      
  }
  
  console.log(cart);
   useEffect(()=>{            
        fetchProduct();
        fetchCart()
   },[])   

  
  return (
    <div className="App">      
         <Product products={products} addtocart={handleAddCart}></Product>                
         <NavBar></NavBar>
    </div>
  );
}

export default App;
