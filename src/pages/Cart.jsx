// CartPage.js

import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    const getItemFromLocal = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
        return storedCart;
    };

    // Function to remove a product from the cart
    const removeFromCart = (itemId) => {
        // Filter out the item with the specified itemId
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        
        // Update local storage with the modified cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
        // Update the state to trigger a re-render
        setCartItems(updatedCart);
    };

    // Function to calculate the total price of items in the cart
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        getItemFromLocal();
    }, []);

    return (
        <>
            <Navbar />
            <div className='cartbacg round'>
                <div className="cart-container">
                    <h1>Your Cart</h1>
                    <div className="cart-items">
                        {/* Map through cartItems and render each item */}
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <span>{item.name}</span>
                                <div className="quantity-controls">
                                    {/* Button to remove the item from the cart */}
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                                <span>{item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    {/* Display the total price of items in the cart */}
                    <div className="cart-total">
                        <strong>Total:</strong> ${calculateTotalPrice()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
