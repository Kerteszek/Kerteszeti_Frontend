//import { TERMEKLISTA } from "../../adatok/adatok";
import React from 'react';
import TermekKartya from '../../components/public/webshop/TermekKartya.js';
import Axios from '../../model/Axios.js';
import './Webshop.css';

export default function Webshop() {
    const termekData = Axios({ endpoint: "products" });//Fontos így kell kinéznie!!

    if (!termekData) {
        return <div>Termékek betöltése...</div>;
    } else {

        return (
            <div className="webshop row mx-auto d-flex align-items-center justify-content-center">

                {termekData.map((elem, index) => (
                    <TermekKartya
                        src={elem.kep}
                        name={elem.scientific_name}
                        dbSzam={elem.in_stock}
                        ar={elem.price}
                        key={index}
                    />
                ))}
            </div>
        );
    }
}
