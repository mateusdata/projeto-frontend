import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contexto = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);
    const [emailAddress, setEmailAddress] = useState("");
    const [open, setOpen] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const recovereUser = localStorage.getItem("usuario");
        if (recovereUser) {
            setUser(JSON.parse(recovereUser));
        }
        setLoad(false);
    }, []);

    const login = (email, tipo) => {
        alert(tipo)
        const logarUser = {
            email, tipo
        };
        if (email) {
            localStorage.setItem("usuario", JSON.stringify(logarUser));
        }
        ;
        setUser(logarUser);
        setEmailAddress(email);
        tipo === 0 ? navigate("/") : navigate("/adm");

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
                open, 
                setOpen
            }}
        >
            {children}
        </Contexto.Provider>
    );
};