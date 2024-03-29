import useAuthContext from "../context/AuthContext";
import React, { useEffect } from "react";

export default function Main() {

    const { user, getUser } = useAuthContext();
    useEffect(() => {
        console.log(user)
        if (!user) {
            getUser();
        }
    });

    return (
        <div className="main">Ez a főoldal
            <h1>Bejelentkezett felhasználó: {user?.name}</h1>
        </div>
    )
}
//<h1>Bejelentkezett felhasználó: {user?.name}</h1>