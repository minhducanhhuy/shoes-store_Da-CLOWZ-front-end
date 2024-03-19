import React from 'react';
import './FormProductDetail.css';
function FormProductDetail({ productProp }) {
  const product = productProp;

  const starsProduct =
    product.reviews.reduce((accumulator, value) => {
      return accumulator + value.stars;
    }, 0) / product.reviews.length;
  const starsProductFixed = (Math.round(starsProduct * 10) / 10).toFixed(1);

  return (
    <div className="formProductDetail">
      <div className="formProductDetail-header">
        <img className="formProductDetail-image" src={product.image} alt="" />
        <div className="formProductDetail-info">
          <div className="formProductDetail-name">{product.name}</div>
          <div className="formProductDetail-describe">{product.describe}</div>
          <div className="formProductDetail-container">
            <div className="formProductDetail-price formProductDetail-property">
              Price <span>${product.price}</span>
            </div>
            <div className="formProductDetail-status formProductDetail-property">
              Status <span>{product.status}</span>
            </div>
            <div className="formProductDetail-reviews formProductDetail-property">
              Reviews
              <div className="formProductDetail-reviews-list">
                <div className="formProductDetail-reviews_stars">{starsProductFixed} stars</div>
                <div className="formProductDetail-reviews_count"> {product.reviews.length} reviews</div>
              </div>
            </div>
            <div className="formProductDetail-quantity formProductDetail-property">
              Quantity
              <input className="formProductDetail-quantity_input" type="number" min="1" max="30" />
            </div>
            <div className="formProductDetail-addToCart_btn">ADD TO CART</div>
          </div>
        </div>
      </div>
      <div className="formProductDetail-body">
        <div className="formProductDetail-commentBoard">
          Reviews
          {product.reviews.map((review, index) => (
            <div className="formProductDetail-commentBoard_form">
              <div className="formProductDetail-commentBoard_name">{review.name}</div>
              <div className="formProductDetail-commentBoard_stars">{review.stars} stars</div>
              <div className="formProductDetail-commentBoard_date">{review.date}</div>
              <div className="formProductDetail-commentBoard_comment">{review.comment}</div>
            </div>
          ))}
        </div>
        <div className="formProductDetail-commentUser">
          WRITE A CUSTOMER REVIEW
          <div className="formProductDetail-commentUser_form">
            <div className="formProductDetail-commentUser_title">Rating</div>
            <select className="formProductDetail-commentUser_rating" name="" id="">
              <option value="">Select...</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
            <div className="formProductDetail-commentUser_title">Comment</div>
            <textarea className="formProductDetail-commentUser_input" name="" id="" cols="12" rows="3"></textarea>\
            <div className="formProductDetail-commentUser_submit">SUBMIT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormProductDetail;
