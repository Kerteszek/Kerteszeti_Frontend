import KosarButton from "../../Buttons/KosarButton";
import MennyisegValaszto from "../../Buttons/MennyisegValaszto";

export default function TermekLeiras(props) {
    function kattintasKezeles() {
        props.kattintasKezeles(props.index);
    }

    console.log(props.termekData);

    return (
        <div className="termekLeiras col-md-5">
            <h5>Kapható kiszerelés: {props.termekData[0].unit}</h5>
            <br />
            <h4>Leírás</h4>
            <p>{props.termekData[0].description}</p>
            <br />
            <div className="row">
                <h5 >Elérhető készlet: {props.termekData[0].in_stock} db</h5>
                <div> < MennyisegValaszto /></div>

            </div>
        </div>
    );
}
