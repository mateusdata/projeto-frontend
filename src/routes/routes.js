import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, Contexto } from "../../src/context/context";
import { HashLoader } from "react-spinners";
import Login from "../pages/login/login";
import Adm from "../pages/private/adm/adm";
import Training from "../pages/public/training/training";
import ManageStudents from "../pages/private/alunos";

const Rotas = () => {

  function Private({ children }) {
    const { autenticado, load } = useContext(Contexto);

    if (load) {
      return <div style={{display:"flex", color: "blue", justifyContent:"center",alignItems:"center", height:"100vh" }} className="loading">
          <HashLoader color="#36d7b7"  size={100}/>
         </div>
    }
    if (!autenticado) {
      return <Navigate to={"/login" || "/test"} />
    }
    return children
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={ <Login/>} />
          <Route exact path="/" element={<Private> <Adm/> </Private>} />
          <Route exact path="/adm" element={<> <Adm/> </>} />
          <Route exact path="/treino" element={<> <Training /> </>} />
          <Route exact path="/adm/alunos" element={<> <ManageStudents /> </>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Rotas;