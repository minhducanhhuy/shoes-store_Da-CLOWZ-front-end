import React from 'react';
import './FormProductIntro.css';
import { Link } from 'react-router-dom';

function FormProductIntro({ productProp }) {
  const product = productProp;

  const starsProduct =
    product.reviews.reduce((accumulator, value) => {
      return accumulator + value.stars;
    }, 0) / product.reviews.length;
  const starsProductFixed = (Math.round(starsProduct * 10) / 10).toFixed(1);

  const linkProduct = '/products/' + product.id;
  return (
    <Link className="FormProductIntro" to={linkProduct}>
      <img className="FormProductIntro-image" src={product.image} alt="" />
      <div className="FormProductIntro-name">{product.name}</div>
      <div className="FormProductIntro-review">
        <div className="FormProductIntro-review_stars"> {starsProductFixed} stars</div>
        <div className="FormProductIntro-review_count"> {product.reviews.length} reviews</div>
      </div>
      <div className="FormProductIntro-price">${product.price}</div>
    </Link>
  );
}

export default FormProductIntro;
