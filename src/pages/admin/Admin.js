import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Admin.css';

export default function Admin() {
    return (
        <div className="admin">Csak belépéssel....
            <section>
                <Card>
                    <Card.Body>
                        <Card.Title>Módosítás</Card.Title>
                        <Card.Text>
                            Itt tudod módosítani az termékeket.
                        </Card.Text>
                        <Button variant="primary" id='termod'>Termékek módosítása</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Beszerzés</Card.Title>
                        <Card.Text>
                            Új termékek érkeztek! Itt felviheted.
                        </Card.Text>
                        <Button variant="primary" id='termfel'>Termékek felivtele</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Felhasználók</Card.Title>
                        <Card.Text>
                            Itt módosíthatod a felhasználókat.
                        </Card.Text>
                        <Button variant="primary" id='fhmod'>Felhasználók módosítása</Button>
                    </Card.Body>
                </Card>
            </section>
        </div>
    )
}