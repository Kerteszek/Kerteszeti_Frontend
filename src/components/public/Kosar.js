import React, { useContext, useEffect, useState } from 'react';
import { KosarbaContext } from '../../context/KosarbaContext';

export default function Kosar() {
    const { torolKosar, torolElem } = useContext(KosarbaContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('kosar'));
        if (storedItems) {
            setCartItems(storedItems);
        }
    }, []);

    const handleDeleteAll = () => {
        torolKosar();
        localStorage.removeItem('kosar');
        setCartItems([]);
    };

    const handleDeleteItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('kosar', JSON.stringify(updatedCartItems));
    };

    return (
        <div className="kosar">
            <h2>Kiválasztott termékek</h2>
            <button onClick={handleDeleteAll}>Delete All</button>
            <ul>
                {cartItems.map((termek, index) => (
                    <li key={index}>
                        {termek.termek_neve} - Quantity: {termek.mennyiseg} - Price: {termek.termek_ara * termek.mennyiseg}
                        <button onClick={() => handleDeleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
