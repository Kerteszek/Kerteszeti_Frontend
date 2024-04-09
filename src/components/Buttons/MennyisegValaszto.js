import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
    
export default function MennyisegValaszto({ onAddToCart }) {
    const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

    const handleQuantityChange = (event) => {
        // Update the quantity based on user input
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    const kosarba = () => {
        // Pass the selected quantity to the parent component
        onAddToCart(quantity);
    };

    return (
        <div>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
            />
            <Button className='float-right megnezGomb' variant="primary" onClick={kosarba}>
                Kosárba
            </Button>
        </div>
    );
}
