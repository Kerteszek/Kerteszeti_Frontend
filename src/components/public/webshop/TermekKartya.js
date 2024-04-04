import Card from 'react-bootstrap/Card';
import KedvencButton from "../../Buttons/KedvencButton.js"
import Termekmegnyit from '../../Buttons/TermekMegnyitButton.js';

//{props.src}

//kepek/termekek/virage1.png

export default function TermekKartya(props) {

    function megnyit(termek_id) {
        console.log(termek_id);
        props.megnyit(termek_id);
    }

    return (
        <Card className='col-md-3 cadKep' style={{ width: '18rem' }}>
            <div className='cardPicture ' ><Card.Img variant="top" src={props.src} /></div>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Szín: {props.color} <br />
                    kiszerelés: {props.tipus} <br />
                    Ára: {props.ar}

                </Card.Text>
                <div className='gombok'>
                    <KedvencButton />
                    <Termekmegnyit megnyit={megnyit} termek_id={props.termek_id} />
                </div>
            </Card.Body>
        </Card>
    );
}