export default function NovenyekKuldesGomb(props) {

    return (
        <>
            <td>{props.scientific_name}</td>
            <td>{props.name}</td>
            <td>{props.permission}</td>
            <td><button>szerkesztés</button></td>
            <td><button>törlés</button></td>

        </>
    )
}