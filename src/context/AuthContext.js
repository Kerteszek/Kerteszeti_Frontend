import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();    


    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        const { data } = await axios.get('/api/user');
        setUser(data);

    }

    const login = async ({ email, password }) => {
        await csrf();

        try {
            const adat = {
                email: email,
                password: password,
            };

            console.log(adat);
            await axios.post("/login", { email, password });
            navigate("/"); //főoldalra visz
            console.log("bejelentkezve.");

        } catch (e) {
            console.log(e.response.status);
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
            console.log(e);
        }
    }
};


export default function useAuthContext() {
    return useContext(AuthContext);
}

