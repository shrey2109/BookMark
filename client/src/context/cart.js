import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

    useEffect(() => {
        let existingCartItem = localStorage.getItem('cart')
        if(existingCartItem) setCart(JSON.parse(existingCartItem));
    }, [])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};

// CUSTOM HOOK
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
