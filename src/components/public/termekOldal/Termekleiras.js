import KedvencButton from "../../Buttons/KedvencButton";

export default function TermekLeiras(props) {

    function kattintasKezeles() {
        //console.log(props.index);
        props.kattintasKezeles(props.index);
    }
    console.log(props.termekData);

    return (
        <div className="termekLeiras col-md-5" >
            <div className="row">
                <div className="col-md-11"><h3 >{props.termekData[0].name}</h3></div>
                <div className="col-md-1" > <KedvencButton /></div>
            </div>
            <h5>{props.termekData[0].scientific_name}</h5>
            <h5>{props.termekData[0].unit}</h5>
            <h5>Rövid leírás a növényről</h5>
            <p>{props.termekData[0].description}</p>


        </div>
    )

}