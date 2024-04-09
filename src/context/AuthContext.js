import { createContext, useContext, useState, useEffect } from "react";
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
            console.log(response);
            token = response.data;
        });

    const getUser = async () => {
        try {
            const { data } = await axios.get("/api/user");
            setUser(data);
        } catch (e) {
            console.log("Error a felhasználó adatainak lekérésekor: " + e);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = async () => {
        //await csrf();
        // console.log(token);
        try {
            axios.post("/logout", { _token: token }).then((resp) => {
                setUser(null);
                console.log(resp);
                localStorage.removeItem('user');
                navigate("/");
            });
        } catch (e) {
            console.error("Hiba kijelentkezés közben!")

        }

    };

    const loginRegister = async ({ ...adat }, vegpont) => {
        await csrf()
        //console.log(token)
        adat._token = token;
        //console.log(adat)
        /// await csrf();
        try {
            await axios.post(vegpont, adat);
            console.log("Sikeres belépés/ regisztráció!");
            getUser();
            localStorage.setItem('user', JSON.stringify(adat));

            navigate("/");
        } catch (error) {
            console.log(error);
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{ logout, loginRegister, errors, getUser, user }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default function useAuthContext() {
    return useContext(AuthContext);
}