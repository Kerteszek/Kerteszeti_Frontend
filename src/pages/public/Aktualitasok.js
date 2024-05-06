import React from 'react';
import TermekKartya from '../../components/public/webshop/TermekKartya.js';
import './Webshop.css';
import { useNavigate } from 'react-router';
import { useGet } from "../../model/Axios";
import Kereses from '../../components/public/Kereses.js';
import Hirdetes from '../../components/public/Hirdetes.js';

export default function Aktualitasok() {
    const termekData = useGet(`product_w_pictures`);
    const navigate = useNavigate();
    let dataToPass = {};

    function megnyit(index) {
        dataToPass.termek_id = index;
        navigate('/termekOldal', { state: dataToPass });
    }

    if (!termekData) {
        return (
            <div>
                <h1>Kis türelmet.</h1>
                <h3>A termékek betöltése folyamatban.</h3>
            </div>
        );
    } else {
        const prioritizedTermekData = termekData.filter(elem => elem.priority);

        return (
            <div className='row'>
                <Kereses />
                <div className="webshop row mx-auto d-flex align-items-center justify-content-center  col-md-8 col-sm-10">
                    <h1 className='text-center'>Jelenlegi szezonális termékeink!</h1>
                    {prioritizedTermekData.map((elem) => (
                        <TermekKartya
                            adatok={prioritizedTermekData}
                            src={elem.picture_path}
                            name={elem.name}
                            ar={elem.price}
                            tipus={elem.unit}
                            color={elem.color}
                            key={elem.product_id}
                            termek_id={elem.product_id}
                            megnyit={megnyit}
                        />
                    ))}
                </div>
                <Hirdetes />
            </div>
        );
    }
}
