import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Admin.css';

export default function Admin() {
    return (
        <div className="admin">
            <section>
                <Card>
                    <Card.Body>
                        <Card.Title>Módosítás</Card.Title>
                        <Card.Text>
                            Itt tudod módosítani az termékeket.
                        </Card.Text>
                        <Button variant="primary" id='termod'>
                            <a href='/admintermekek'>Termékek módosítása</a>
                        </Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Beszerzés</Card.Title>
                        <Card.Text>
                            Új termékek érkeztek! Itt felviheted.
                        </Card.Text>
                        <Button variant="primary" id='termfel'>
                            <a href='/admintermekek'>Termékek felivtele</a>
                        </Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Felhasználók</Card.Title>
                        <Card.Text>
                            Itt módosíthatod a felhasználókat.
                        </Card.Text>
                        <Button variant="primary" id='fhmod'>
                            <a href='/admintermekek'>Felhasználók módosítása</a>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
        </div>
    )
}