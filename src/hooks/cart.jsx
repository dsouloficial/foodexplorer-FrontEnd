import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext({});

function CartProvider({ children }) {

  const [ cartItems, setCartItems ] = useState(0);
  const [ cartDishes, setCartDishes ] = useState([]);

  console.log('cart: ', cartItems, cartDishes);

  function addDish(dish, qty) {
    const newAddDish = { ...dish, quantity: qty };

    setCartDishes(prevState => [ ...prevState, newAddDish ]);
    setCartItems(prevState => (prevState += qty));
    toast(`Adicionado: ${qty} x ${dish.name}`);
  }

  return (
    <CartContext.Provider value={{
      cartItems, addDish
    }}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * @typedef {Object} CartContext - contexto do carrinho
 * @property {Array} cartDishes - array de pratos adicionados
 * @property {Object} cartItems - total de items do carrinho
 * @property {function} addDish - adiciona prato
 */

/**
 * Hook useCart - retorna o conteúdo do carrinho de compras
 * @returns {CartContext} context - contexto do carrinho
 */
function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
