import '../webshop/TermekOldal.css';
export default function Kep(props) {

    function kepvalt() {
        let termek_id = props.src;
        // console.log(props);        
        props.kepvalt(termek_id);
        //onClick={kepvalt}
    }

    return (
        <img className='TermekKep img-fluid'

            src={props.elem.kep}
            alt={props.termek_id.termek_id}
            onClick={kepvalt} />
    )

}