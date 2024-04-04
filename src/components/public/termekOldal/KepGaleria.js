import React, { useState, useEffect } from "react";
import Kep from "./Kep";

export default function KepGaleria(props) {
    const [aktKep, setAktKep] = useState(0);
    console.log(props.termekData);

    useEffect(() => {
        console.log(props.termekData[aktKep]);
    }, [aktKep, props.termekData]);

    function kepvalt(termekKep_eleres) {
        console.log(termekKep_eleres);
        setAktKep(termekKep_eleres);
    }

    return (
        <div className="kepGaleria row col-md-7" >
            <div className="nagyKep col-md-12 text-center">
                <Kep adatok={props.termekData[aktKep]} />
            </div>
            <div className="row" >
                {
                    props.termekData.map((elem, index) => {
                        return (
                            <div className="kisKepek col-md-3 " key={index}>
                                <Kep adatok={elem} kepvalt={() => kepvalt(index)} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

//https://mdbootstrap.com/docs/react/extended/gallery/