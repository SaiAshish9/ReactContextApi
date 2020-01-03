import React,{createContext,useState,useEffect} from 'react'

import {addItemToCart,removeItemFromCart,clearItemFromCart,getCartItemsCount,getTotalCost} from './cart.utils'

 export const CartContext=createContext({
  hidden:true,
  toggleHidden:()=>{},
  cartItems:[],
  addItem:()=>{},
  removeItem:()=>{},
  clearItem:()=>{},
  cartItemsCount:0,
  total:0
})

 const CartProvider =({children})=>{

  const [hidden,setHidden] =useState(true)
  const [cartItems,setCartItems]=useState([])
  const [cartItemsCount,setItemsCount]=useState(0)
  const [total,setTotalCost]=useState(0)


  const addItem=item =>  setCartItems(addItemToCart(cartItems,item))

  const removeItem =item => setCartItems(removeItemFromCart(cartItems,item))

  const clearItem =item => setCartItems(clearItemFromCart(cartItems,item))


  const toggleHidden=()=>setHidden(!hidden)


// whenever cartItemsCount  updates

useEffect(()=>{
  setItemsCount(getCartItemsCount(cartItems))
  setTotalCost(getTotalCost(cartItems))
},[cartItems])


  return (
    <CartContext.Provider
    value={{
      hidden,
      toggleHidden,
      cartItems,
      addItem,
      removeItem,
      clearItem,
      total,
      cartItemsCount
    }}

    >
    {children}
    </CartContext.Provider>
  )
}


export default CartProvider
