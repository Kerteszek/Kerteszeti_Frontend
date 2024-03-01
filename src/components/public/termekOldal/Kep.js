import '../webshop/TermekOldal.css';
export default function Kep(props) {

    // console.log(props);

    function kepvalt() {

        let kep = props.adatok;
        //let termek_id = props.adatok.termek_id;
        //let vissza = {termek_id, kep }
        console.log(kep);
        props.kepvalt(kep);
        //onClick={kepvalt}
    }

    return (

        <img className='TermekKep img-fluid'

            src={props.adatok.kep}
            alt={props.adatok.kep}
            onClick={kepvalt} />
    )

}