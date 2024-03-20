import React, { useState } from 'react';
import './ProductList.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormProductIntro from '../FormProductIntro';
import FormProductDetail from '../FormProductDetail';

function ProductList({ productsProp }) {
  const products = productsProp;
  const quantityPage = Math.ceil(products.length / 6);
  const [countPage, setCountPage] = useState(Array.from({ length: quantityPage }));
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="productList">
        {products.map((product, index) => {
          if (product.id >= currentPage * 6 - 5 && product.id <= currentPage * 6)
            return <FormProductIntro key={index} productProp={product} />;
        })}
      </div>
      <div className="productList-pagination">
        {countPage.map((page, index) => {
          return (
            <div
              className={
                currentPage == index + 1
                  ? 'productList-pagination_page-item active'
                  : 'productList-pagination_page-item'
              }
              onClick={() => {
                setCurrentPage(index + 1);
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
