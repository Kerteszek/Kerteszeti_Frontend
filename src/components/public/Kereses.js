import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import '../../pages/Layout.css';
export default function Kereses() {
    return (
        <aside id="asBal" className="col-md-2 col-sm-1">
            Részletes keresés
            <Form inline="true">
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>

        </aside>
    )
}