import { createContext, useContext, useState } from 'react';

export const SearchContext = createContext({});

function SearchProvider({ children }) {

  const [ data, setData ] = useState({ search: '' });

  function setSearch(value) {

    const search = value
      .trim()
      .replace(/[^\p{L}\d\s]/gu, "");

    setData({ search });
  }

  return (
    <SearchContext.Provider value={{
      setSearch,
      searchValue: data.search,
    }}>
      {children}
    </SearchContext.Provider>
  );
}

/**
 * @typedef {Object} searchContext - contexto de busca
 * @property {string} searchValue - valor de busca
 * @property {function} setSearch - define o valor de busca
 */

/**
 * Hook useSearch - retorna o conteúdo do contexto de busca
 * @returns {searchContext} context - contexto de busca
 */
function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearch };
