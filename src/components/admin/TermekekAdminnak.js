//import Table from 'react-bootstrap/Table';
//import { useEffect, useState } from 'react';

export default function FelhasznalokListazasa(props) {
    /*
        const [propsek, setpropsek] = useState([])
        const [loading, setLoading] = useState(false)
    
        useEffect(() => {
            setLoading(true)
            fetch("http://127.0.0.1:8000/api/products")
            .then(response => response.json())
            .then(json => setpropsek(json))
            .finally(() => {
                setLoading(false)
            })
        }, [])
    */
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
