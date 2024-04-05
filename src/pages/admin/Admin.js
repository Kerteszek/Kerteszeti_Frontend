import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Admin.css';

//import useAuthContext from "../context/AuthContext";

export default function Admin() {

    //const { user, logout } = useAuthContext();

    return (
        //{user}
        <div className="admin">
            <section>
                <Card className='adminKartya'>
                    <Card.Body>
                        <Card.Title>Módosítás</Card.Title>
                        <Card.Text>
                            Itt tudod módosítani az termékeket.
                        </Card.Text>
                        <Button variant="primary" id='termod'>
                            <a href='admin/termekeklista'>Termékek módosítása</a>
                        </Button>
                    </Card.Body>
                </Card>

                <Card className='adminKartya'>
                    <Card.Body>
                        <Card.Title>Növények</Card.Title>
                        <Card.Text>
                            Új áru érkezett! Itt felviheted.
                        </Card.Text>
                        <Button variant="primary" id='novfel'>
                            <a href='admin/novenyekfelvitel'>Növenyek felivtele</a>
                        </Button>
                    </Card.Body>
                </Card>

                <Card className='adminKartya'>
                    <Card.Body>
                        <Card.Title>Felhasználók</Card.Title>
                        <Card.Text>
                            Itt módosíthatod a felhasználókat.
                        </Card.Text>
                        <Button variant="primary" id='fhmod'>
                            <a href='admin/felhasznaloklista'>Felhasználók módosítása</a>
                        </Button>
                    </Card.Body>
                </Card>
            </section>
        </div>
    )
}