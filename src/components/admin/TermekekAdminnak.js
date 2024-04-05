import {useGet} from "../../model/Axios";
import Table from 'react-bootstrap/Table';

export default function FelhasznalokListazasa() {
    const termekek = useGet(`products`);


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
                    {termekek && termekek.map(termek => {
                        <tr key={termek.product_id}>
                            <td>{termek.scientific_name}</td>
                            <td>{termek.status}</td>
                            <td>{termek.type}</td>
                            <td>{termek.color}</td>
                            <td>{termek.unit}</td>
                            <td>{termek.price}</td>
                            <td>{termek.in_stock}</td>
                            <td>{termek.reserved}</td>
                            <td>{termek.priority}</td>
                            <td><button>szerkesztés</button></td>
                            <td><button>törlés</button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    )
}
