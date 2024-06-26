import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cartCount, setCartCount] = useState(0);

const incrementCartCount = () => {
   setCartCount(prevCount => {
       const newCount = prevCount + 1;
       console.log('Incrementing cart count to:', newCount);
       return newCount;
   });
};

 return (
    <CartContext.Provider value={{ cartCount, incrementCartCount }}>
      {children}
    </CartContext.Provider>
 );
};
