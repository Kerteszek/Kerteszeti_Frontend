import Table from 'react-bootstrap/Table';
//import { useEffect, useState } from 'react';

export default function FelhasznalokListazasa(props) {
/*
    const [propsek, setpropsek] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("http://127.0.0.1:8000/api/products")
        .then(response => response.json())
        .then(json => setpropsek(json))
        .finally(() => {
            setLoading(false)
        })
    }, [])
*/
    return (
        <>
            <h1>Termékek listája</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Hivatalos név</th>
                        <th>Státusz</th>
                        <th>Típus</th>
                        <th>Szín</th>
                        <th>Kiszerelés</th>
                        <th>Egységár</th>
                        <th>Készlet</th>
                        <th>Lefoglalt mennyiség</th>
                        <th>Kedvezményes</th>
                        <th>Szerkesztés</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr key={props.product_id}>
                            <td>{props.scientific_name}</td>
                            <td>{props.status}</td>
                            <td>{props.type}</td>
                            <td>{props.color}</td>
                            <td>{props.unit}</td>
                            <td>{props.price}</td>
                            <td>{props.in_stock}</td>
                            <td>{props.reserved}</td>
                            <td>{props.priority}</td>
                            <td><button>szerkesztés</button></td>
                            <td><button>törlés</button></td>
                        </tr>
                </tbody>
            </Table>
        </>
    )
}
