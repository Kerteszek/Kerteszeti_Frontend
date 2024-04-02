import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CurrencyInput from 'react-currency-input-field';
import './TermekFelvitel.css';

export default function TermekekFelvitel() {
    return (
        <div className="termekekfelvitel">
            <h5>Kérlek töltsd ki a megfelelő adatokkal az alábbi űrlapot!</h5>
            <section>

                <Form>
                    <Form.Group controlId="latinNev">
                        <Form.Label>Latin név:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <br />

                    <Form.Group className="mb-3" controlId="statusz">
                        <Form.Select>
                            <option>Kérlek válassz állapotot!</option>
                            <option value="false" selected>Mag</option>
                            <option value="true">Élő</option>
                        </Form.Select>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="tipus">
                        <Form.Select>
                            <option>Kérlek válassz típust!</option>
                            <option value="false" selected>Haszonnövény</option>
                            <option value="true">Dísznövény</option>
                        </Form.Select>
                    </Form.Group>
                    <br />

                    <Form.Group className="mb-3" controlId="szin">
                        <Form.Select>
                            <option value="null" selected>Kérlek válassz színt vagy hagyd üresen!</option>
                            <option value="vörös">vörös</option>
                            <option value="piros">piros</option>
                            <option value="rózsaszín">rózsaszín</option>
                            <option value="lila">lila</option>
                            <option value="kék">kék</option>
                            <option value="sárga">sárga</option>
                            <option value="narancs">narancs</option>
                            <option value="zöld">zöld</option>
                            <option value="fehér">fehér</option>
                            <option value="fekete">fekete</option>
                        </Form.Select>
                    </Form.Group>
                    <br />

                    <Form.Group className="mb-3" controlId="kiszereles">
                        <Form.Select>
                            <option selected>Kérlek válassz kiszerelést!</option>
                            <option value="5cm cserép">5cm cserép</option>
                            <option value="12cm cserép">piros</option>
                            <option value="5l cserép">rózsaszín</option>
                            <option value="gyökércsomagolt">lila</option>
                            <option value="5g">kék</option>
                            <option value="10g">sárga</option>
                            <option value="200g">narancs</option>
                            <option value="1kg">zöld</option>
                        </Form.Select>
                    </Form.Group>
                    <br />

                    <Form.Group className="mb-3" controlId="termekara">
                        <Form.Label>Termék egységára:</Form.Label>
                        <br />
                        <CurrencyInput
                            id="input-example"
                            name="input-name"
                            defaultValue={999}
                            suffix="Ft"
                            decimalsLimit={2}
                            onValueChange={(value, name, values) => console.log(value, name, values)}
                        />
                    </Form.Group>
                    <br />

                    <Form.Group className="mb-3" controlId="priority">
                        <Form.Label>Kedvezményes?</Form.Label>
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            id="priority-chbx"
                            label="igen"
                        />
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