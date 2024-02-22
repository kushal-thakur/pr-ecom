// HomePage.js

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Footer from '../component/Footer';
import {useSelector,useDispatch} from 'react-redux'
import { allProductsSlice } from '../slice/product-SLICE';

const HomePage = () => {
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const dispatch = useDispatch()
    const PRODUCT_ALL = useSelector((state) => state.getProduct.product)
    const location = useLocation();
    // filer search
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('searchQuery');

    // const FilteredPRoduct = PRODUCT_ALL.filter((data) => {
    //     // If searchQuery exists, filter the products based on the searchQuery
    //     if (searchQuery) {
    //         return data.title.toLowerCase().includes(searchQuery.toLowerCase());

    //     }
    //     // If searchQuery is empty or not provided, return all products
    //     return true;
    // });

    const FilteredPRoduct = PRODUCT_ALL.filter((data) => {
        // If searchQuery exists, filter the products based on the searchQuery
        if (searchQuery) {
            const search = searchQuery.toLowerCase();
            const titleMatch = data.title.toLowerCase().includes(search);
            const descriptionMatch = data.description.toLowerCase().includes(search);
            const categoryMatch = data.category.toLowerCase().includes(search);

            return titleMatch || descriptionMatch || categoryMatch;
        }
        // If searchQuery is empty or not provided, return all products
        return true;
    });





    useEffect(() => {
        dispatch(allProductsSlice())
    }, [dispatch, searchQuery])

    // filer search

    //   using redux



    // using hooks

    // const fetchProducts = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3000/posts');
    //         console.log("data",response.data);
    //         setProduct(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // using hooks




    // Function to add a product to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const updatedCart = [...prevItems, { ...product, quantity: 1 }];
            // Save updated cart data to local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };


    // using hooks

    // useEffect(()=>{
    //     fetchProducts()
    // },[])


    // using hooks


    return (
        <>
            <Navbar />
            <Hero />

            <div className='container carddiv'>
                <div className="row">
                    <div></div>
                    {FilteredPRoduct.map((item) => (
                        
                        <div key={item.id} className="card mt-5 me-4 ms-3 " style={{ width: '17rem' }}>
                            <img src={item.image} className="card-img-top" style={{ width: '15rem', height: "16rem" }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title || ""}</h5>
                                <h5 className="card-price">{item.price || ""}$ only  </h5>
                                
                                <button className='cardbtn' onClick={() => addToCart(item)}>Add To Cart</button>
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

    );
}

export default HomePage;
