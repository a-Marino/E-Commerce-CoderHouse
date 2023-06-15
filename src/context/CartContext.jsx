import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    let exist = isInCart(newProduct.id, newProduct.spec.id);
    if (exist) {
      let newArray = cart.map((product) => {
        if (
          product.id === newProduct.id &&
          product.spec.id === newProduct.spec.id
        ) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (id, specId) => {
    let exist = cart.some((prod) => prod.id === id && prod.spec.id === specId);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeById = (id, specId) => {
    let newArray = cart.filter(
      (product) => product.id !== id || product.spec.id !== specId
    );
    setCart(newArray);
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};
