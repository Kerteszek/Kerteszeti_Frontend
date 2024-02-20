import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import KedvencButton from "../../Buttons/KedvencButton.js"

//{props.src}

//kepek/termekek/virage1.png

export default function TermekKartya(props) {

    return (
        <Card className='col-md-3 cadKep' style={{ width: '18rem' }}>
            <div className='cardPicture ' ><Card.Img variant="top" src="kepek/termekek/viragJoMeret5.jpg" /></div>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Raktáron: {props.dbSzam} <br />
                    Ára: {props.ar}

                </Card.Text>
                <div className='gombok'>
                    <KedvencButton />
                    <Button className='float-right megnezGomb' variant="primary">Megnézem</Button>
                </div>
            </Card.Body>
        </Card>
    );
}