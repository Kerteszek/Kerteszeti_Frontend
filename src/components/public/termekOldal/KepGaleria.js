import { useState } from "react";
import Kep from "./Kep";
import { KepekLISTA } from "../../../adatok/kepek.js";


export default function KepGaleria(props) {
    const [aktKep, setAktKep] = useState(0);
    

    function kepvalt(termek_id) {        
        console.log(termek_id);
        setAktKep(termek_id);
    
      }

    return (
        <div className="kepGaleria row col-md-7" >
            <div className="nagyKep col-md-12 text-center">
                <Kep key="0" src={[aktKep]} termek_id={aktKep}/>
               
            </div>
            <div className="row" >
                {KepekLISTA.map((elem, termek_id) => {
                    return (
                        <div className="kisKepek col-md-3 ">
                            <Kep adatok={elem} key={elem.termek_id} kepvalt={kepvalt}/>
                            {elem}
                        </div>

                    )

                })}
            </div>
        </div>
    )

}
//https://mdbootstrap.com/docs/react/extended/gallery/