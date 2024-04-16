import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import KosarButton from './KosarButton';
import { KosarbaContext } from '../../context/KosarbaContext';


export default function MennyisegValaszto(props) {
    const [mennyiseg, setMennyiseg] = useState(1);
    const { kivalaszt } = useContext(KosarbaContext);

    const handleQuantityChange = (event) => {
        let ujMennyiseg = parseInt(event.target.value);
        if (ujMennyiseg < 1) {
            ujMennyiseg = 1;
        }
        setMennyiseg(ujMennyiseg);
    };

    const decreaseQuantity = () => {
        if (mennyiseg > 1) {
            setMennyiseg(mennyiseg - 1);
        }
    };

    const increaseQuantity = () => {
        setMennyiseg(mennyiseg + 1);
    };

    const addToCart = () => {
        const termek = {
            termek_id: props.dataToPass.termek_id,
            termek_neve: props.dataToPass.termek_neve,
            termek_ara: props.dataToPass.termek_ara,
            mennyiseg: mennyiseg,
        };

        console.log("MennyisegValaszto")
        console.log(termek);

        const kosar = JSON.parse(localStorage.getItem('kosar')) || [];
        const existingProductIndex = kosar.findIndex(item => item.termek_id === termek.termek_id);

        if (existingProductIndex !== -1) {
            kosar[existingProductIndex].mennyiseg += mennyiseg;
        } else {
            kosar.push(termek);
        }

        localStorage.setItem('kosar', JSON.stringify(kosar));
        kivalaszt(termek);
    };



    return (
        <div>
            <Button variant="secondary" onClick={decreaseQuantity}>-</Button>
            <input
                type="number"
                value={mennyiseg}
                onChange={handleQuantityChange}
                min="1"
            />
            <Button variant="secondary" onClick={increaseQuantity}>+</Button>
            <KosarButton onAddToCart={addToCart} />
        </div>
    );
}
