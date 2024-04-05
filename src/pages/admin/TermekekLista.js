import TermekekAdminnak from '../../components/admin/TermekekAdminnak';
import { useGet } from "../../model/Axios";

export default function TermekekLista() {
    const termekek = useGet(`products`);

    return (
        <div className="termekeklista">
            <section>

                {termekek.map((termek) => (
                    < TermekekAdminnak
                        adatok={termekek}
                        key={termek.product_id}
                        tudnev={termek.scientific_name}
                        status={termek.status}
                        type={termek.type}
                        color={termek.color}
                        unit={termek.unit}
                        price={termek.price}
                        in_stock={termek.in_stock}
                        reserved={termek.reserved}
                        priority={termek.priority}
                    />
                ))}
            </section>
        </div >
    )
}