import React, { useState } from "react";
import Kep from "./Kep";
import '../../../pages/public/TermekOldal.css';

export default function KepGaleria(props) {
    const [aktKep, setAktKep] = useState(0);

    function kepvalt(termekKep_eleres) {
        console.log(termekKep_eleres);
        setAktKep(termekKep_eleres);
    }

    function kepekLepegetes(direction) {
        if (direction === 'elozo' && aktKep > 0) {
            setAktKep(aktKep - 1);
        } else if (direction === 'kovetkezo' && aktKep < props.kepData.length - 1) {
            setAktKep(aktKep + 1);
        }
    } 
    const startIndex = Math.max(0, aktKep - 1);
    const endIndex = Math.min(props.kepData.length, aktKep + 3);

    return (
        <div className="kepGaleria row col-md-7">
            <div className="nagyKep col-md-12 text-center">
                <Kep adatok={props.kepData[aktKep]} />
            </div>
           
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <button onClick={() => kepekLepegetes('elozo')} disabled={aktKep === 0}>{"<"}</button>
                    <div className="d-flex flex-wrap justify-content-center">
                        {props.kepData.slice(startIndex, endIndex).map((elem, index) => {
                            return (
                                <div className="kisKepek col-md-3" key={index}>
                                    <Kep adatok={elem} kepvalt={() => kepvalt(index + startIndex)} />
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={() => kepekLepegetes('kovetkezo')} disabled={aktKep === props.kepData.length - 1}>{">"}</button>
                </div>
            </div>
        </div>
    )
}
