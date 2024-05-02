import React, { useContext, useEffect, useState } from 'react';
import { KosarbaContext } from '../../context/KosarbaContext';
import './Kosar.css';
import { useGet } from '../../model/Axios'; // Import the useGet hook

export default function Kosar() {
    const { torolKosar, torolElem } = useContext(KosarbaContext);
    const [cartItems, setCartItems] = useState([]);
    const productImages = useGet('boritokep');
    console.log(productImages)

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

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.termek_ara * item.mennyiseg), 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal();
    };

    // Create a new array combining cartItems with productImages
    const combinedArray = cartItems.map(termek => {
        const image = productImages.find(item => item.product_id === termek.termek_id);
        return {
            ...termek,
            picture_path: image ? image.picture_path : '/kepek/placeholder.png'
        };
    });

    return (
        <div className="kosar">
            <h2 className="mb-4">Kiválasztott termékek</h2>
            {cartItems.length > 0 ? (
                <>
                    <button className="btn btn-danger mb-3" onClick={handleDeleteAll}>Kosár ürítése</button>
                    <div className="product-list">
                        {combinedArray.map((termek, index) => (
                            <div key={index} className="product">
                                <img src={termek.picture_path} className="product-img" alt="Product" />
                                <div className="product-info">
                                    <h5 className="product-name">{termek.termek_neve}</h5>
                                    <p className="product-quantity">Mennyiség: {termek.mennyiseg}</p>
                                    <p className="product-price">Ár: {termek.termek_ara * termek.mennyiseg}</p>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteItem(index)}>Törlés</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-end mt-4">
                        <p className="fw-bold">Végösszeg: {calculateTotal()} Ft</p>
                    </div>
                </>
            ) : (
                <p>A kosara üres!</p>
            )}
        </div>
    );
}
