import { useLocation } from 'react-router-dom';
import React from 'react';
import KepGaleria from '../../components/public/termekOldal/KepGaleria.js';
import './TermekOldal.css';
import TermekLeiras from '../../components/public/termekOldal/Termekleiras.js';
import { useGet } from "../../model/Axios";
import KedvencButton from "../../components/Buttons/KedvencButton";

export default function TermekOldal(props) {
    const location = useLocation();
    const { state } = location;
    //console.log(state);
    const kepData = useGet(`k_product_pictures/${state.termek_id}`);
    const termekData = useGet(`konkret_product/${state.termek_id}`);
    //console.log(termekData);

    if (!termekData) {
        return <div><h1>Kis türelmet.</h1>
            <h3>A termék betöltése folyamatban.</h3>
        </div>;
    } else {
        return (
            <div className="termekOldal row">
                <div className="col-md-11">
                    <div className=""><h3 >{termekData[0].name}</h3></div>
                    <h6>{termekData[0].scientific_name}</h6>
                </div>
                <div className="col-md-1">
                    <div className="" > <KedvencButton /></div></div>

                <KepGaleria kepData={kepData} />
                <TermekLeiras termekData={termekData} />
            </div>
        )
    }
}