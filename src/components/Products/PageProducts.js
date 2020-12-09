import React from 'react';
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';

export default function PageProducts() {
  const { sorted, page, changePage } = React.useContext(ProductContext);
  if (sorted[page]) {
    return <ProductList products={sorted[page]} />;
  } else {
    return (
      <h3 className="search-errors">
        unfortunaly your search query did not return any products
      </h3>
    );
  }
}
