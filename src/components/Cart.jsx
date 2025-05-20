import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items added yet.</p>
            )}
            <div className="footer">
                23071A05P7
            </div>
        </div>
    );
};

export default Cart;