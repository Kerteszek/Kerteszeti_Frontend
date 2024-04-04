import '../../../pages/public/TermekOldal.css';

export default function Kep(props) {

    function kepvalt() {
        let kep = props.adatok;
        console.log("Kep.js kepvalt: ");
        console.log(kep)
        props.kepvalt(kep);
    }
    return (

        <img className='TermekKep img-fluid'

            src={props.adatok.picture_path}
            alt={props.adatok.picture_path}
            onClick={kepvalt} />
    )
}