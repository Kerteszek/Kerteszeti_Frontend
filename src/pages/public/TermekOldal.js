import { useLocation } from 'react-router-dom';
import React from 'react';
import KepGaleria from '../../components/public/termekOldal/KepGaleria.js';
import './TermekOldal.css';
import TermekLeiras from '../../components/public/termekOldal/Termekleiras.js';
import Axios from '../../model/Axios.js';
import { useGet } from "../../model/Axios";


export default function TermekOldal(props) {
    const location = useLocation();
    const { state } = location;
    //console.log(state);
    const termekData = useGet(`konkret_product/${state.termek_id}`);


    //console.log(termek_id);
    //console.log(props);
    if (!termekData) {
        return <div><h1>Kis türelmet.</h1>
            <h3>A termék betöltése folyamatban.</h3>
        </div>;
    } else {
        return (
            <div className="termekOldal row">
                <KepGaleria />
                <TermekLeiras termekObj={"adatok"} />

                <div>Termék ID: {state.termek_id} <br></br>
                 </div>
            </div>

        )
    }

}

//https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12