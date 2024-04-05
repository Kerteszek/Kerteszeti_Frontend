import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import CurrencyInput from 'react-currency-input-field';
import './adminEgyebek.css';

export default function NovenyekFelvitel() {
    return (
        <div className="novenyekfelvitel">
            <h5>Kérlek töltsd ki a megfelelő adatokkal az alábbi űrlapot!</h5>
            <section>

                <Form className='novurlap'> 
                    <Form.Group className="mb-3" controlId="latinNev">
                        <Form.Label>Tudományos név:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <br />

                    <Form.Group className="mb-3" controlId="kozNev">
                        <Form.Label>Közönséges név:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <br />

                    <Button variant="primary" type="submit">
                        Felvitel
                    </Button>
                </Form>
            </section>
        </div >
    )
}