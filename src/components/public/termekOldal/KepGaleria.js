import { useState } from "react";
import Kep from "./Kep";
import { KepekLISTA } from "../../../adatok/kepek.js";


export default function KepGaleria(props) {
    const [aktKep, setAktKep] = useState(0);


    function kepvalt(termekKep_eleres) {
        console.log(termekKep_eleres);
        setAktKep(termekKep_eleres);

    }

    return (
        <div className="kepGaleria row col-md-7" >
            <div className="nagyKep col-md-12 text-center">
                {console.log(KepekLISTA[aktKep])}
                <Kep adatok={aktKep}  />
                
            </div>
            <div className="row" >

                {
                    KepekLISTA.map((elem, index) => {

                        return (
                            <div className="kisKepek col-md-3 ">
                                <Kep adatok={elem} key={index} kepvalt={kepvalt} />

                            </div>

                        )

                    })}
            </div>
        </div>
    )

}
//https://mdbootstrap.com/docs/react/extended/gallery/