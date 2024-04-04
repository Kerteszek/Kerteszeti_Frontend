import {useGet} from "../../model/Axios";

export default function FelhasznalokListazasa(){
    const termekek = useGet(`products`);
    
    return(
        <>
        <h1>Felhasználók listája</h1>
        <table>
            <thead>
                <tr>
                    <th>Hivatalos név</th>
                    <th>Közönséges név</th>
                    <th>Hozzáférés</th>
                </tr>
            </thead>
            <tbody>
                {termekek.map(termek => {
                    <tr key={termek.id}>
                        <td>{termek.latinname}</td>
                        <td>{termek.name}</td>
                        <td>{termek.permission}</td>
                    </tr>
                })}
            </tbody>
        </table>
        </>
    )
}
