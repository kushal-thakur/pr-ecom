import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  let productdetails;


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      const result = await response.data.products;
      let productdetails = result.find((product) => product.id === parseInt(id));
      console.log("result", productdetails)
      setDetail(productdetails);
    } catch (error) {
      console.log(error);
    }
  };                            




  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <>
      <div>
        {detail && (
          <div className="card mt-5 me-4 ms-3" style={{ width: '18rem' }}>
            <img src={detail.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{detail.title}</h5>
              <h5 className="card-price">{detail.price}$ only</h5>
              <p className="card-text">{detail.description}</p>
              <Link className="btn btn-primary">
                Add To Cart
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
