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

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    let token = "";
    const csrf = () =>
        axios.get("/token").then((response) => {
            console.log(response);
            token = response.data;
        });

    const getUser = async () => {
        const { data } = await axios.get("/api/user");
        setUser(data);
    };

    const logout = async () => {
        await csrf();
        console.log(token);
        axios.post("/logout", { _token: token }).then((resp) => {
            setUser(null);
            console.log(resp);
            // Clear user from local storage on logout
            localStorage.removeItem('user');
            // Redirect to home page or wherever appropriate
            navigate("/");
        });
    };

    const loginRegister = async ({ ...adat }, vegpont) => {
        await csrf()
        console.log(token)
        adat._token = token;
        console.log(adat)

        await csrf();

        try {
            await axios.post(vegpont, adat);
            console.log("Sikeres belépés/ regisztráció!");

            await getUser();

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