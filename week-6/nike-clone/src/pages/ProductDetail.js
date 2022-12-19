import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getProductDetail } from "../services/ProductServices";
import { DetailWrapper } from "../components/shared/scShared";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await getProductDetail(productId);
      console.log(res);
      if (!res.data) {
        // redirect page
        toast.error("This product does not exist!");
        setTimeout(() => {
          navigate('/');
        }, 4000);
      } else {
        setProduct(res.data);
      }
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
      <ToastContainer hideProgressBar />
    </>
  );
};

export default ProductDetail;
