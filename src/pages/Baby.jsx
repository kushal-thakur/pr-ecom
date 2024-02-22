import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
function Baby() {

    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);




    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            const data = await response.data
            console.log("data", data);


            const filt = data.filter((data) => data.category === "Baby")
            console.log("baby", filt)
            setProduct(filt);
        } catch (error) {
            console.log(error);
        }
    }


    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const updatedCart = [...prevItems, { ...product, quantity: 1 }];
            // Save updated cart data to local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };



    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <>



            <Navbar />
            <div className='container card'>
                <div className="row">
                    {product.map((item) => (
                        <div key={item.id} className="card mt-5 me-4 ms-3" style={{ width: '17rem' }}>
                            <img src={item.image} className="card-img-top" style={{ width: '15rem', height: "16rem" }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title || ""}</h5>
                                <h5 className="card-price">{item.price || ""}$ only  </h5>
                                <p className="card-text">{item.description || ""}</p>
                                <span>{""}</span>
                                <button onClick={() => addToCart(item)}>Add To Cart</button>
                                {/* <Link to={`/detail/${item.id}`}>Detail</Link> */}
                                <Link to={`/detail/${item.id}`}>
                                    Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />



        </>
    )
}

export default Baby