import React from 'react';
import './Home.css';
import ProductList from '../Product/ProductList';

function Home({ productsProp }) {
  return (
    <div className="home">
      <ProductList productsProp={productsProp} />
    </div>
  );
}

export default Home;
