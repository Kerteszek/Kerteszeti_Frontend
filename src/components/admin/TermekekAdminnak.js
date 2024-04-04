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
                    <th>Státusz</th>
                    <th>Típus</th>
                    <th>Szín</th>
                    <th>Kiszerelés</th>
                    <th>Egységár</th>
                    <th>Készlet</th>
                    <th>Lefoglalt mennyiség</th>
                    <th>Kedvezményes</th>
                </tr>
            </thead>
            <tbody>
                {termekek.map(termek => {
                    <tr key={termek.id}>
                        <td>{termek.scientific_name}</td>
                        <td>{termek.status}</td>
                        <td>{termek.type}</td>
                        <td>{termek.color}</td>
                        <td>{termek.unit}</td>
                        <td>{termek.price}</td>
                        <td>{termek.in_stock}</td>
                        <td>{termek.reserved}</td>
                        <td>{termek.priority}</td>
                    </tr>
                })}
            </tbody>
        </table>
        </>
    )
}
