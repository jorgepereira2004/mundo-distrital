import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Carregar carrinho do localStorage ao montar
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('mundo-distrital-cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Erro ao carregar carrinho:', e);
    }
  }, []);

  // Guardar carrinho no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('mundo-distrital-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Adicionar produto ao carrinho
  const addToCart = (produto, quantidade = 1) => {
    setCartItems((prev) => {
      const existente = prev.find((item) => item.id === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...prev, { ...produto, quantidade }];
    });
  };

  // Aumentar quantidade
  const incrementQuantidade = (produtoId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === produtoId
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  };

  // Diminuir quantidade
  const decrementQuantidade = (produtoId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === produtoId && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  // Remover produto do carrinho
  const removeFromCart = (produtoId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== produtoId));
  };

  // Limpar carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total
  const calcularTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.precoAtual) * item.quantidade,
      0
    ).toFixed(2);
  };

  // Contar items totais
  const contarItems = () => {
    return cartItems.reduce((total, item) => total + item.quantidade, 0);
  };

  const value = {
    cartItems,
    addToCart,
    incrementQuantidade,
    decrementQuantidade,
    removeFromCart,
    clearCart,
    calcularTotal,
    contarItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
};
