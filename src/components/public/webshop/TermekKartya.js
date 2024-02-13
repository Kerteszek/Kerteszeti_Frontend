import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//kepek/termekek/virage1.png

export default function TermekKartya() {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="kepek/termekek/virage1.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}