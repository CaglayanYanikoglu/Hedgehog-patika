import React, { useState, createContext } from 'react';

const FavoritesContext = createContext();
export default FavoritesContext;

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);


  const value = {
    favorites,
    setFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
};