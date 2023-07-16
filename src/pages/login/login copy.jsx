import { useContext, useState } from "react";
import { Contexto } from "../../context/context";
import axiosInstase from "../../components/axios/axiosInstase";
import Table from "../../components/tables/table";
export default function Login() {
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [erro, setErro]  =  useState("");
    const {login} = useContext(Contexto);


    const auth = (e)=>{
        e?.preventDefault();
       
        if(email && password){
            axiosInstase.post("/login",{
                email,
                password
            }).then((response)=>{
                console.log(response);
                setErro(response?.data?.erro)
                if(response.status===200){
                    alert("autenticado")
                    login(email, response.data.profile)
                }
            }).catch((erro)=>{
                console.log(erro);
            })
        }
    }
    
    return (
      <>
        <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 border border-red-900 min-h-[100vh]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-25 w-auto rounded-2xl"
              src={"https://media.tenor.com/D5Lj07lfXjsAAAAC/fitness-gym.gif"}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sistema de cadastro de academia
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={auth}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  e-mail 
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    senha
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Recumperar senha?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Senha"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
             
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
            <span className={"text-red-600 text-lg" } >{erro}</span>
            <p className="mt-10 text-center text-sm text-gray-500">
             Esqueceu a senha?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Não é um membro? Inicie um teste gratuito de 14 dias
              </a>
            </p>
          </div>
          
        </div>
      </>
    )
  }
  