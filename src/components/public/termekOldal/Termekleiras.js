import React, { useState } from 'react';
import MennyisegValaszto from "../../Buttons/MennyisegValaszto";
import { KosarbaProvider } from '../../../context/KosarbaContext';


export default function TermekLeiras(props) {
    const [addedToBasket, setAddedToBasket] = useState(false);
    //console.log(props);

    const dataToPass = {
        termek_id: props.termekData[0].product_id,
        termek_neve: props.termekData[0].name,
        termek_ara: props.termekData[0].price,
    };
    //console.log("dataToPass");
    //console.log(dataToPass)

    const handleAddToBasket = (selectedQuantity) => {
        setAddedToBasket(true);
    };

    return (
        <div className="termekLeiras col-md-5">
            <h5>Kapható kiszerelés: {props.termekData[0].unit}</h5>
            <br />
            <h4>Leírás</h4>
            <p>{props.termekData[0].description}</p>
            <br />
            <div className="row">
                <h5>Elérhető készlet: {props.termekData[0].in_stock} db</h5>
                <h5>Ár: {props.termekData[0].price} Ft</h5>
                <KosarbaProvider>
                    <MennyisegValaszto onAddToCart={handleAddToBasket} dataToPass={dataToPass} />
                </KosarbaProvider>
            </div>
            {addedToBasket && <p>Termék hozzáadva a kosárhoz!</p>}
        </div>
    );
}
