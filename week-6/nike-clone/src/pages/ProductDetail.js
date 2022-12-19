import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { getProductDetail } from "../services/ProductServices";
import { DetailWrapper } from "../components/shared/scShared";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await getProductDetail(productId);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div style={{ margin: '16px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#2223ee' }}>
          See all Products
        </Link>
      </div>
      <DetailWrapper>
        <div className="image-wrapper">
          <img alt="product" src={product.image} />
        </div>
        <div className="details">
          <h2 className="title">{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
      </DetailWrapper>
    </>
  );
};

export default ProductDetail;
