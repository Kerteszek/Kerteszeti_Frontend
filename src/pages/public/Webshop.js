import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import '../../pages/Layout.css';
import TermekKartya from '../../components/public/webshop/TermekKartya.js';
import { useNavigate } from 'react-router';
import { useGet } from "../../model/Axios";
import Hirdetes from '../../components/public/Hirdetes.js';

export default function Webshop() {
    const [searchQuery, setSearchQuery] = useState('');
    const termekData = useGet(`product_w_pictures`);
    const navigate = useNavigate();
    let dataToPass = {};

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const megnyit = (index) => {
        dataToPass.termek_id = index;
        navigate('/termekOldal', { state: dataToPass });
    };

    if (!termekData) {
        return (
            <div>
                <h1>Kis türelmet.</h1>
                <h3>A termékek betöltése folyamatban.</h3>
            </div>
        );
    } else {
        const filteredData = termekData.filter((elem) => {
            const scientificName = elem.scientific_name.toLowerCase();
            const name = elem.name.toLowerCase();
            const query = searchQuery.toLowerCase();
            return scientificName.includes(query) || name.includes(query);
        });

        return (
            <div className='row'>
                <div id="asBal" className="col-md-2 col-sm-1">
                    Részletes keresés
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="keresés"
                                    className="mr-sm-2"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="webshop row mx-auto d-flex align-items-center justify-content-center  col-md-8 col-sm-10">
                    {filteredData.map((elem) => (
                        <TermekKartya
                            adatok={termekData}
                            src={elem.picture_path}
                            name={elem.name}
                            ar={elem.price}
                            tipus={elem.unit}
                            color={elem.color}
                            key={elem.product_id}
                            termek_id={elem.product_id}
                            megnyit={megnyit}
                        />
                    ))}
                </div>
                <Hirdetes />
            </div>
        );
    }
}