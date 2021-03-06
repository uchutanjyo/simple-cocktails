
import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context/ProductsContext';
import SearchForm from './SearchForm';


const ProductsContainer = ({children}) => {
const {products, setProducts, searchTerm, loading,getProducts, filtered, setShow, handleClick} = useGlobalContext()




if (loading) {
  return <div className='products'>Loading...</div>
}

return (

 <>
 
  <div className='products-title'>
     <SearchForm></SearchForm>
    <h2>
     {filtered.length} products found!</h2></div> 
    
 <div className='products'>
   <div className="categories-sidebar"><h2>Categories</h2>
   <ul>
     <li>Home</li>
    <li>Kitchen</li>
     <li>Music</li>
     <li>Electronics</li>
     <li>Food</li>

   </ul>
   </div>
    <div className='products-container'>
        

 
{filtered.map((product) => {
    const {id, title, description, imageUrl, price} =product;
   
  
       return (
       <>
       <div key={id} className='product'>
         <h2> <button id={id} onClick={handleClick}>{`${title.substring(0, 70)}...`.toUpperCase()}</button></h2>
          <h3> ${price}</h3>
          <section className='description'><img src={imageUrl} alt="" />
         </section></div>
          </>
       ) 
  }

  )}

</div>
 </div>

 </>
  );
};

export default ProductsContainer;
