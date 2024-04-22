import useAuthContext from "../context/AuthContext";
import React, { useEffect } from "react";
import "./Main.css";

export default function Main() {

    const { user, getUser } = useAuthContext();
    useEffect(() => {
        console.log(user)
        if (!user) {
            getUser();
        }
    });

    return (
        <div className="main container-fluid col-md-12">
            <div id="welcome_banner"><img className="welcome" src="kepek/welcome_felirattal.jpg" alt="Description of the image" /></div>

        </div>
    )
}