import React, { useContext, useEffect, useState } from 'react';
import { KosarbaContext } from '../../context/KosarbaContext';
import './Kosar.css';
import { useGet, usePost } from '../../model/Axios';
import useAuthContext from "../../context/AuthContext";
import axios from '../../api/axios';

export default function Kosar() {
    const { user, getUser } = useAuthContext();
    const { torolKosar } = useContext(KosarbaContext);
    const [cartItems, setCartItems] = useState([]);
    const productImages = useGet('boritokep');
    const user_id = user ? user.id : null;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('kosar'));
        if (storedItems) {
            setCartItems(storedItems);
        }
    }, []);

    useEffect(() => {
        csrf();
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

    const combinedArray = cartItems.map(termek => {
        if (!productImages) {
            return { ...termek, picture_path: '/kepek/placeholder.png' };
        }
        const image = productImages.find(item => item.product_id === termek.termek_id);
        return {
            ...termek,
            picture_path: image ? image.picture_path : '/kepek/placeholder.png'
        };
    });

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };



    const handlePurchaseClick = () => {
        setShowModal(true);
    };

    const savedPurchaseDate = localStorage.getItem("purchaseDate");
    const apihozDate = savedPurchaseDate.split(' ')[0];//ezzel elfogadja a baskend
    //console.log(apihozDate)//OK megvan


    const handlePurchaseConfirmation = async () => {
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        localStorage.setItem("purchaseDate", formattedDate);

        const vasarlasiAdatok = {
            buyer: user_id,
            shopping_date: formattedDate,
        };

        try {
            const purchaseResponse = await axios.post('api/purchases', vasarlasiAdatok);
            const response = await axios.get(`api/akt_vasarlas/${user_id}/${apihozDate}`);
            const purchase_number = response.data[0].purchase_number;
            console.log(purchase_number);

            const purchaseItems = cartItems.map(item => ({
                purchase_number: purchase_number,
                product_id: item.termek_id,
                quantity: item.mennyiseg
            }));
            console.log(purchaseItems)

            for (const item of purchaseItems) {
                try {
                    await axios.post('api/purchase_items', item);
                    console.log('Aktuális termék bekerült a PutchaseItem-be: ', item);
                } catch (error) {
                    console.error('Nem sikerült a PutchaseItem-be való post: ', error);
                }
            }
            
            console.log('Sikeres vásárlás!');
            handleDeleteAll();
        } catch (error) {
            console.error('Sikertelen vásárlás:', error);
        }

        setShowModal(false);
    };



    const handleModalClose = () => {
        setShowModal(false);
    };


    const [ujToken2, setUjToken] = useState("");

    const csrf = async () => {
        try {
            const response = await axios.get("http://localhost:8000/token");
            setUjToken(response.data);
        } catch (error) {
            console.error("Hiba fetching CSRF token:", error);
        }
    };


    return (
        <div className="kosar">
            <h2 className="mb-4">Kiválasztott termékek</h2>
            {cartItems.length > 0 ? (
                <>
                    <button className="btn btn-danger mb-3" onClick={handleDeleteAll}>Kosár ürítése</button>
                    <div className="product-list">
                        {combinedArray.map((termek, index) => (
                            <div key={index} className="product">
                                {productImages ? (
                                    <React.Fragment>
                                        <img src={termek.picture_path} className="product-img" alt="Product" />
                                        <div> <h5 className="product-name">{termek.termek_neve}</h5></div>
                                        <div className="product-info">
                                            <div> <p className="product-quantity">Mennyiség: {termek.mennyiseg} </p></div>
                                            <div> <p className="product-price">Ár: {termek.termek_ara * termek.mennyiseg} </p></div>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteItem(index)}>Törlés</button>
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <p>Türelmét kérjük, a Kosara betöltés alatt!</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-end mt-4">
                        <p className="fw-bold">Végösszeg: {calculateTotal()} Ft</p>
                    </div>
                    {user_id && (
                        <div className="text-end mt-4">
                            <button className="btn btn-primary" onClick={handlePurchaseClick}>Megvásárol</button>
                        </div>
                    )}
                </>
            ) : (
                <p>A kosara üres!</p>
            )}

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Vásárlás véglegesítése</h2>
                        <p>Biztosan szeretné véglegesíteni a vásárlást?</p>
                        <div>
                            <button className="btn btn-danger" onClick={handlePurchaseConfirmation}>Vásárlás véglegesítése</button>
                            <button className="btn btn-secondary" onClick={handleModalClose}>Mégsem</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
