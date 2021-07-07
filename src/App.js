
import './App.css';
import React,{useState,useEffect} from 'react'
// import Product from './components/Product/Product'
// import NavBar from './components/Navbar/Navbar'
import {Product,NavBar} from './components/common'
import {commerce} from './lib/Commerce';
// console.log(commerce);
function App() {
   const [products,setproducts] = useState([]); 
   const [cart,setcart] = useState({});

   const fetchProduct = async ()=>{         
      const {data} = await commerce.products.list();       
      setproducts(data);
   }

  const fetchCart = async()=>{          
       setcart( await commerce.cart.retrieve());
  }

  const handleAddCart = async (productId,quantity)=>{      
      const data = await commerce.cart.add(productId,quantity);           
      setcart(data.cart)               
  }  
   useEffect(()=>{            
        fetchProduct();
        fetchCart()
   },[])   

 
  return (
    <div className="App">      
         <Product products={products} addtocart={handleAddCart}></Product>                
         <NavBar totalitem={cart.total_items} ></NavBar>
    </div>
  );
}

export default App;
