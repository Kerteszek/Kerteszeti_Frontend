import TermekekAdminnak from '../../components/admin/TermekekAdminnak';
import { useGet } from "../../model/Axios";
import Table from 'react-bootstrap/Table';

export default function TermekekLista() {
    const termekek = useGet(`products`);
    console.log(termekek)

    if (!termekek) {
        return <div><h1>Kis türelmet.</h1>
            <h3>A termékek betöltése folyamatban.</h3>
        </div>;
    } else {
        return (
            <div className="termekeklista">
                <section>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Termékkulcs</th>
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


                            {termekek.map((termek) => (
                                <tr>
                                    < TermekekAdminnak
                                        adatok={termekek}
                                        key={termek.product_id}
                                        product_id={termek.product_id}
                                        scientific_name={termek.scientific_name}
                                        status={termek.status}
                                        type={termek.type}
                                        color={termek.color}
                                        unit={termek.unit}
                                        price={termek.price}
                                        in_stock={termek.in_stock}
                                        reserved={termek.reserved}
                                        priority={termek.priority}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </section>
            </div >
        )
    }
}