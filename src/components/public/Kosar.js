import React, { useState, useEffect } from 'react';
import { useGet, useDelete } from "../../model/Axios";

export default function Kosar(props) {
    const basketItems = useGet('basket_items');
    const deleteBasketItem = useDelete('');

    const handleDeleteItem = async (basketId, productId) => {
        try {
            await deleteBasketItem(`basket_items_delete/${productId}/${basketId}`);
        } catch (error) {
            console.error('Error deleting basket item:', error);
        }
    };

    return (
        <div className="kosar">
            <h2>Your Basket</h2>
            <ul>
                {basketItems && basketItems.map((item, index) => (
                    <li key={index}>
                        {item.product.name} - {item.amount}
                        <button onClick={() => handleDeleteItem(item.basket, item.product.id)}>&times;</button>
                    </li>
                ))}
            </ul>
            <div>
                Total: {calculateTotal(basketItems)}
            </div>
        </div>
    );
}

function calculateTotal(items) {
    if (!items) return 0;
    return items.reduce((total, item) => total + (item.product.price * item.amount), 0);
}
