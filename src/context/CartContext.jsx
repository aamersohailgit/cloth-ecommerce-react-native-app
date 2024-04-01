import React, { createContext, useContext, useMemo, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      // Check if the item is already in the cart
      const itemIndex = currentItems.findIndex((i) => i.id === item.id);
      if (itemIndex > -1) {
        // If it is, update the quantity
        const newItems = [...currentItems];
        newItems[itemIndex].quantity += item.quantity;
        return newItems;
      } else {
        // If it's not, add the new item
        return [...currentItems, item];
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
