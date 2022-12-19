import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
// import FavoritesContext from '../../context/FavoritesContext';
import { CardWrapper } from './ScHome';

const Card = ({ product, handleRemove, handleFavorite }) => {
  // const favoritesContext = useContext(FavoritesContext);
  // console.log('card compoennt context:', favoritesContext);

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/products/${product.id}`);
  }

  return (
    <CardWrapper onClick={goDetail}>
      <img src={product.image} alt="product" />
      <div className='product-content'>
        <span className='title'>{product.title}</span>
        <span className='category'>{product.category}</span>
        <span className='price'>${product.price}</span>
      </div>
      <div>
        <svg onClick={() => handleFavorite(product)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z" /><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" /></svg>
        <svg onClick={() => handleRemove(product.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" /></svg>
      </div>
    </CardWrapper>
  );
};

export default Card;