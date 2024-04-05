//import { useGet } from "../../model/Axios";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

export default function FelhasznalokListazasa() {
    //const felhasznalok = useGet(`users`);
    const [error, setError] = useState();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUsers = async () =>{
            setLoading(true);

            try{
                const response = await fetch(`http://127.0.0.1:8000/api/users`)
            } catch(e) {
                setError(e);
            }
            setLoading(true);
        }
        fetchUsers();
        //fetch("http://127.0.0.1:8000/api/users")
        
    }, []);

    return (
        <>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Email</th>
                            <th>Hozzáférés</th>
                            <th>Szerkesztés</th>
                            <th>Törlés</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user => {
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.permission}</td>
                                <td><button>szerkesztés</button></td>
                                <td><button>törlés</button></td>
                            </tr>
                        })}
                    </tbody>
            </Table>
        </>
    )
}
