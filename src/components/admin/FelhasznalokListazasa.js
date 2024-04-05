//import { useGet } from "../../model/Axios";
//import { useEffect, useState } from 'react';

export default function FelhasznalokListazasa(props) {
    /*
    const [error, setError] = useState();
    const [propss, setpropss] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchpropss = async () =>{
            setLoading(true);

            try{
                const response = await fetch(`http://127.0.0.1:8000/api/propss`)
            } catch(e) {
                setError(e);
            }
            setLoading(true);
        }
        fetchpropss();
        //fetch("http://127.0.0.1:8000/api/propss")
        
    }, []);
*/
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
