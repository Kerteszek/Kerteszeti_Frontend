export default function FelhasznalokListazasa(props) {

    return (
        <>
            <td> {props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.permission}</td>
            <td><button>szerkesztés</button></td>
            <td><button>törlés</button></td>

        </>
    )
}
