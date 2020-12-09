// products context

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts, flattenProducts, paginate } from '../utils/helpers';

export const ProductContext = React.createContext();

//Provider, useContext()

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  //extra state values
  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    shipping: false,
    price: 'all',
  });

  const changePage = (index) => {
    console.log(index);
  };

  const updateFilters = (e) => {
    console.log(e);
  };

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featured = featuredProducts(flattenProducts(response.data));
      const products = flattenProducts(response.data);
      setProducts(products);
      setSorted(paginate(products));
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        page,
        filters,
        changePage,
        updateFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
