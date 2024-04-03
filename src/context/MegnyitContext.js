import { createContext, useState } from "react";

export const MegnyitContext = createContext();

export const KivalasztProvider = ({ children }) => {

    const [kivalasztottLista, setKivaelasztottLista] = useState([]);

    function kivalaszt(ertek) {
        console.log(ertek);
        const a = kivalasztottLista;
        a.push(ertek);
        console.log(a);
        setKivaelasztottLista([...a]);
    }

    return (
        <MegnyitContext.Provider
            value={{ kivalasztottLista, setKivaelasztottLista, kivalaszt }}
        >
            {children}
        </MegnyitContext.Provider>
    );
}