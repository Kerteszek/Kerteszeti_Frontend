import FelhasznalokListazasa from '../../components/admin/FelhasznalokListazasa';
import { useGet } from "../../model/Axios";
import Table from 'react-bootstrap/Table';

import React, { useEffect } from 'react';
import useAuthContext from '../../context/AuthContext';

export default function FelhasznalokLista() {
    
    const felhasznalok = useGet('users');
    console.log(felhasznalok)

    const { user, getUser } = useAuthContext();
    useEffect(() => {
        console.log(user)
        if (!user) {
            getUser();
        }
    });

    


    return (
        <div className="felhasznaloklista">
            {user && (user.permission === 0 || user.permission === 1) ? (
                <>
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
            </>) : (
                <></>
            )}
        </div>
    )
}