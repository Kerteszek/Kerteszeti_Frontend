import FelhasznalokListazasa from '../../components/admin/FelhasznalokListazasa';
import { useGet } from "../../model/Axios";
import Table from 'react-bootstrap/Table';

export default function FelhasznalokLista() {
    const felhasznalok = useGet(`users`);
    console.log(felhasznalok)
    return (
        <div className="felhasznaloklista">
            <section>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Felhasznalókulcs</th>
                            <th>Felhasználó neve</th>
                            <th>emailcíme</th>
                            <th>hozzáférése</th>
                            <th>Szerkesztés</th>
                            <th>Törlés</th>
                        </tr>
                    </thead>
                    <tbody>
                        {felhasznalok.map((felhasznalo) => (
                            <tr>
                                < FelhasznalokListazasa
                                    adatok={felhasznalok}
                                    key={felhasznalo.id}
                                    id={felhasznalo.id}
                                    name={felhasznalo.name}
                                    email={felhasznalo.email}
                                    permission={felhasznalo.permission}
                                />
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>
        </div>
    )
}