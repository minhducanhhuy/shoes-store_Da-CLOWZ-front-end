import React, { useState } from 'react';
import './ProductList.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormProductIntro from '../FormProductIntro';
import FormProductDetail from '../FormProductDetail';

function ProductList({ productsProp }) {
  const products = productsProp;
  const [countPage, setCountPage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div>
      <div className="productList">
        {products.map((product, index) => {
          if (product.id <= 6) return <FormProductIntro key={index} productProp={product} />;
        })}
      </div>
      <div className="productList-pagination">
        {countPage.map((count, index) => {
          return <div>{count}</div>;
        })}
      </div>
    </div>
  );
}

export default ProductList;
