import Button from 'react-bootstrap/Button';

export default function Termekmegnyit(props) {

    function megnyit() {
        console.log(props.termek_id);
        let termek_id = props.termek_id;
        props.megnyit(termek_id);
        //vissza kéne adnia egy ?tömböt /Listát, ami tarralmazza a termék minden szükséges adatát
    }

    return (
        <Button onClick={megnyit} className='float-right megnezGomb' variant="primary">Megnézem</Button>
    )
}