import React from 'react';
import { CardWrapper } from './ScHome';

const Card = ({ product, handleRemove }) => {
  return (
    <CardWrapper onClick={() => handleRemove(product.id)}>
      <img src={product.image} alt="product" />
      <div className='product-content'>
        <span className='title'>{product.title}</span>
        <span className='category'>{product.category}</span>
        <span className='price'>${product.price}</span>
      </div>
    </CardWrapper>
  );
};

export default Card;