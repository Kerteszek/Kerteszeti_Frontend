import React, { createContext, useState, useContext } from "react";

export const KosarbaContext = createContext();

export const KosarbaProvider = ({ children }) => {
    const [kivalasztottTermekek, setKivalasztottTermekek] = useState([]);

    const kivalaszt = (termek) => {
        setKivalasztottTermekek(prevItems => [...prevItems, termek]);
        console.log("KosarbaContext");
        console.log(termek); // megvan a data
    };

    const torolElem = (index) => {
        setKivalasztottTermekek(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const torolKosar = () => {
        setKivalasztottTermekek([]);
    };

    return (
        <KosarbaContext.Provider value={{ kivalasztottTermekek, kivalaszt, torolElem, torolKosar }}>
            {children}
        </KosarbaContext.Provider>
    );
};
