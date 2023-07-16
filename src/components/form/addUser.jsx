import React from 'react';



const Formulario = () => {




  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Formulário</h1>
      <form className="max-w-xl mx-auto">
      
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
            NOME
          </label>
          <input
            type="text"
            id="nome"
            className="border border-purple-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            className="border border-purple-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tipo-treino" className="block text-gray-700 font-medium mb-2">
            SENHA
          </label>
          <input
            type="text"
            id="tipo-treino"
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
