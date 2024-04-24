import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { usePost } from "../../model/Axios";

import useAuthContext from '../../context/AuthContext';

export default function NovenyekFelvitel() {

    const { user, getUser } = useAuthContext();
    useEffect(() => {
        console.log(user)
        if (!user) {
            getUser();
        }
    });
    const [requestData, setPlantData] = useState({
        scientific_name: '',
        name: '',
        plant_category: ''
    });

    const createPlant = usePost('plants', requestData);

    const handlePlantData = (e) => {
        const { name, value } = e.target;
        setPlantData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPlant(); // createPlant hívása a form elküldésekor
            console.log('Növény sikeresen felvéve az adatbázisba.');

            setPlantData({
                scientific_name: '',
                name: '',
                plant_category: ''
            }); // Az űrlap tartalmának törlése a felvitel után
        } catch (error) {
            console.error('Hiba történt az adatok felvitele közben:', error);
        }
    }

    return (
        <>
            {user && (user.permission === 0 || user.permission === 1) ? (
                <>
                    <div className="novenyekfelvitel">
                        <h5>Kérlek töltsd ki a megfelelő adatokkal az alábbi űrlapot!</h5>
                        <section>
                            <Form className='novurlap' onSubmit={handleFormSubmit}>
                                <Form.Group className="mb-3" controlId="latinNev">
                                    <Form.Label>Tudományos név:</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='scientific_name'
                                        value={requestData.scientific_name}
                                        onChange={handlePlantData} />
                                </Form.Group>
                                <br />

                                <Form.Group className="mb-3" controlId="kozNev">
                                    <Form.Label>Közönséges név:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name='name'
                                        value={requestData.name}
                                        onChange={handlePlantData} />
                                </Form.Group>
                                <br />

                                <Form.Group className="mb-3" controlId="kateg">
                                    <Form.Label>Kategóriája:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name='plant_category'
                                        value={requestData.plant_category}
                                        onChange={handlePlantData} />
                                </Form.Group>
                                <br />
                                <Button variant="primary" type="submit">
                                    Felvitel
                                </Button>
                            </Form>
                        </section>
                    </div >
                </>
            ) : (
                <></>
            )}
        </>

    )
}
