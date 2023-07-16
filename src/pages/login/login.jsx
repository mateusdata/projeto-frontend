import { useContext, useState } from "react";
import { Contexto } from "../../context/context";
import axiosInstase from "../../components/axios/axiosInstase";
import Table from "../../components/tables/table";
export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const { login } = useContext(Contexto);


  const handleLogin = (e) => {
    e?.preventDefault();

    if (email && password) {
      axiosInstase.post("/login", {
        email,
        password
      }).then((response) => {
        console.log(response);
        setErro(response?.data?.erro)
        if (response.status === 200) {
          alert("autenticado")
          login(email, response.data.profile)
        }
      }).catch((erro) => {
        console.log(erro);
      })
    }
  }

  return (
    <>

      <div class="relative overflow-hidden bg-[#1F2937] min-h-[100vh] max-h-[100vh]  ">
        <div class="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
          <div class="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">

            <h1 class="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
              Sistema de gerenciamento de academia <span class="text-blue-600 dark:text-blue-500">Ifit</span>
            </h1>
            <p class="mt-3 text-base text-gray-500">
              Estamos entusiasmados em anunciar uma nova ferramenta que irá revolucionar a forma como você interage com o mundo fitness. Com base na tecnologia padrão da Web, estamos utilizando o Preline para criar belos aplicativos híbridos de plataforma cruzada, permitindo que você acesse todos os recursos da academia em um piscar de olhos.            </p>


            <div class="mt-8 grid">
              <button type="button" class="hidden py-3 px-4  justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                  <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                  <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                  <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                </svg>
                Login com o google
              </button>
            </div>

            <div class="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Login</div>


            <form onSubmit={handleLogin}>
              <div class="mb-4">
                <label for="hs-hero-name-2" class="block text-sm font-medium dark:text-white"><span class="sr-only">Full name</span></label>
                <input type="text" id="hs-hero-name-2" class="  hidden py-3 px-4  w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Nome" />
              </div>

              <div class="mb-4">
                <label for="hs-hero-email-2" class="block text-sm font-medium dark:text-white"><span class="sr-only">Email address</span></label>
                <input onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
              </div>

              <div class="mb-4">
                <label for="hs-hero-password-2" class="block text-sm font-medium dark:text-white"><span class="sr-only">Password</span></label>
                <input onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
              </div>

              <div class="grid">
                <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Login</button>
              </div>
            </form>

          </div>
        </div>

        <div class="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://tecnofit-site.s3.sa-east-1.amazonaws.com/media/files/2021/09/26135227/quanto-fatura-uma-academia.jpg')] bg-no-repeat bg-center bg-cover"></div>

      </div>

    </>
  )
}
