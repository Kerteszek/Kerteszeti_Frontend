export default function FelhasznalokListazasa(props) {
    return (
        <>
            <td>{props.product_id}</td>
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
        </>
    )
}
