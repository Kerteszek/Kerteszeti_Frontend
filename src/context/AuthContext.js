import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    let token = "";
    const csrf = () =>
        axios.get("/token").then((response) => {
            token = response.data;
        });

    //const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        const { data } = await axios.get('/api/user');
        setUser(data);
    };

    const login = async ({ ...adat }) => {
        await csrf()
        //console.log(token)
        adat._token = token;

        try {
            await axios.post("/login", adat);
            getUser();
            navigate("/");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.adat.errors);
            }
            console.log(e);
        }
    };

    const register = async ({ adat }) => {
        await csrf();
        try {
            await axios.post("/register", { adat });
            getUser();
            navigate("/");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.adat.errors);
            }
            console.log(e);
        }
    };

    return (<AuthContext.Provider
        value={{ user, errors, getUser, login, register }}
    >
        {children}
    </AuthContext.Provider>
    )
};


export default function useAuthContext() {
    return useContext(AuthContext);
}

