import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contexto = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);
    const [emailAddress, setEmailAddress] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const recovereUser = localStorage.getItem("usuario");
        if (recovereUser) {
            setUser(JSON.parse(recovereUser));
        }
        setLoad(false);
    }, []);

    const login = (email) => {

        const logarUser = {
            email,
        };
        if (email) {
            localStorage.setItem("usuario", JSON.stringify(logarUser));
        }
        ;
        if (email) {
            setUser(email);
            setEmailAddress(email);
            navigate("/");
        }
    };
    const logout = () => {
        navigate("/login");
        setUser(null);
        localStorage.removeItem("usuario");

    };

    return (
        <Contexto.Provider
            value={{
                autenticado: Boolean(user),
                user,
                setUser,
                login,
                logout,
                load,
                emailAddress,
            }}
        >
            {children}
        </Contexto.Provider>
    );
};