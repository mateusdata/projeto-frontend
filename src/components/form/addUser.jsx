import React, { useState } from 'react';
import axiosInstase from '../axios/axiosInstase';

const Formulario = () => {
  const [user, setUser] = useState({ nome: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
   
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password && user.nome) {
      axiosInstase.put("/admin/student", {
        nome:user.nome,
        email:user.email,
        password:user.password
      }).then((response) => {
        console.log(response);
         alert("Usuarios criado com sucesso!!!");
        return;
      }).catch((erro) => console.log("erro"));

    }
    alert("Não é posivel criar usuarios");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Formulário</h1>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
            NOME
          </label>
          <input
            name="nome"
            onChange={handleChange}
            type="text"
            id="nome"
            value={user.nome}
            className="border border-purple-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            EMAIL
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            id="email"
            value={user.email}
            className="border border-purple-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            password
          </label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            id="password"
            value={user.password}
            className="border border-purple-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-300 text-white rounded-lg px-4 py-2 font-medium hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
          >
            Enviar
          </button>
          <button
            type="button"
            className="bg-purple-300 text-white rounded-lg px-4 py-2 font-medium ml-4 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
