import TermekKartya from "../../components/public/webshop/TermekKartya";
import { TERMEKLISTA } from "../../adatok/adatok";
import './Webshop.css';



export default function Webshop() {
    return (
        <div className="webshop row mx-auto d-flex align-items-center justify-content-center">
            {TERMEKLISTA.map((elem, index) => {
                return (<TermekKartya src={elem.kep} name={elem.scientific_name} dbSzam={elem.in_stock}
                    ar={elem.price} key={index} />)
            })}
        </div>
    )
}