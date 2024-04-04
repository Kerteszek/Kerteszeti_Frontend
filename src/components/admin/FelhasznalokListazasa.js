import {useGet} from "../../model/Axios";

export default function FelhasznalokListazasa(){
    const felhasznalok = useGet(`users`);
    
    return(
        <>
        <h1>Felhasználók listája</h1>
        <table>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Email</th>
                    <th>Hozzáférés</th>
                </tr>
            </thead>
            <tbody>
                {felhasznalok.map(felhasznalo => {
                    <tr key={felhasznalo.id}>
                        <td>{felhasznalo.name}</td>
                        <td>{felhasznalo.email}</td>
                        <td>{felhasznalo.permission}</td>
                    </tr>
                })}
            </tbody>
        </table>
        </>
    )
}
