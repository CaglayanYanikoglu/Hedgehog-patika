import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';

import { Container, ProductsWrapper, Title } from './ScHome';
import { getAllProducts } from '../../services/ProductServices';
import Card from './Card';

const Products = ({
  search, favorites, setFavorites
}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  let [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || '');

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts();
      setProducts(res.data);
      const allCategories = res.data.map(item => item.category);
      const uniqCategories = _.uniq(allCategories);
      setCategories(uniqCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategory = (category) => {
    setActiveCategory(category);
    const gender = searchParams.get('gender');
    const params = {
      category,
      gender
    };
    setSearchParams(params);
  };

  const handleFavorite = (product) => {
    setFavorites([...favorites, product]);
  }

  const filteredData = products.filter(product => {
    // search
    if (!activeCategory) {
      return product.title.toLowerCase().includes(search.toLowerCase());
    } else {
      return product.category === activeCategory && product.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  const handleRemove = (id) => {
    const remainingProducts = products.filter(product => product.id !== id);
    setProducts(remainingProducts);
  };

  const removeCategoryFilter = () => {
    setActiveCategory('');
    searchParams.delete('category');
    setSearchParams(searchParams);
  }

  return (
    <Container>
      <Title>Tüm ürünler ({filteredData.length}) - {activeCategory}
        {activeCategory && (
          <svg onClick={removeCategoryFilter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" /></svg>
        )}
      </Title>
      <ProductsWrapper>
        <ul className="left-menu">
          {categories.map(category => (
            <li className={`${(activeCategory === category) ? 'active' : ''}`} onClick={() => handleCategory(category)} key={category}>{category}</li>
          ))}
        </ul>
        <div className="products">
          {filteredData.map(product => (
            <Card product={product} handleRemove={handleRemove} key={product.id} handleFavorite={handleFavorite} />
          ))}
        </div>
      </ProductsWrapper>
    </Container>
  );
};

export default Products;
