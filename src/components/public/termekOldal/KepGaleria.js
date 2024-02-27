import { useState } from "react";
import Kep from "./Kep";
import { KepekLISTA } from "../../../adatok/kepek.js";


export default function KepGaleria(props) {
    const [aktKep, setAktKep] = useState(0);

    return (
        <div className="kepGaleria row col-md-6" >
            <div className="nagyKep col-md-12">
                <Kep key="1000" src="kepek/termekek/viragJoMeret2.jpg" termek_id="1000" />
            </div>

            {KepekLISTA.map((elem, index) => {
                return (
                    <div className="kisKepek col-md-3">
                        <Kep key={elem.termek_id} src={elem.kep} termek_id={elem.termek_id} />
                    </div>

                )

            })}
        </div>
    )

}
//https://mdbootstrap.com/docs/react/extended/gallery/