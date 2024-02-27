import { useLocation } from 'react-router-dom';
import React from 'react';


export default function TermekOldal(props) {
    const location = useLocation();
    const { state } = location;
    console.log(state);

    //console.log(termek_id);
    console.log(props);

    return (
        <div className="termekOldal">
            <div>Hello World</div>
            <br />
            <div>Termék ID: {state.termek_id}</div>
        </div>

    )

}

//https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12