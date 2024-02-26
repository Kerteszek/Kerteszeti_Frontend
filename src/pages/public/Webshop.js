//import { TERMEKLISTA } from "../../adatok/adatok";
import React from 'react';
import TermekKartya from '../../components/public/webshop/TermekKartya.js';
import Axios from '../../model/Axios.js';
import './Webshop.css';

export default function Webshop() {

    const termekData = Axios({ endpoint: "products" });//Fontos így kell kinéznie!!

    function megnyit(index) {
        props.megnyit(index);
    }

    if (!termekData) {
        return <div><h1>Kis türelmet.</h1>
            <h3>A termékek betöltése folyamatban.</h3>
        </div>;
    } else {

        return (
            <div className="webshop row mx-auto d-flex align-items-center justify-content-center">

                {termekData.map((elem) => (
                    <TermekKartya
                        src={elem.kep}
                        name={elem.scientific_name}
                        dbSzam={elem.in_stock}
                        ar={elem.price}
                        key={elem.product_id}
                        termek_id={elem.product_id}
                        onClick={megnyit}
                    />
                ))}
            </div>
        );
    }
}

