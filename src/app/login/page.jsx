"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg"
import EmailIcon from "@/public/icons/profile-information/grey/email.svg"
import KeyIcon from "@/public/icons/profile-information/grey/key.svg"
import ArrowIcon from "@/public/icons/utilities/arrow-white.svg"
import CircleDegrade from "@/public/icons/utilities/circle-degrade.svg"

export default function Home() {

  // URl da API
  const apiUrl = "http://localhost:8080/v1/Lotus/cadastro/gestante/login";

  //Variveis
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Alerts (invalidEmail, successLogin, funcaoFututa)
  const invalidDados = () => {
    Swal.fire({
      title: "Login falhou.",
      text: "Não desanime! Confira seus dados e tente outra vez.",
      icon: "warning",
      showConfirmButton: false,
      timer: 2000
    });
  };

  const successLogin = () => {
    Swal.fire({
      icon: "success",
      title: "Bem vindo-a Lotus!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const featureConstruction = () => {
    Swal.fire({
      title: "Em manutenção",
      text: "Essa funcionalidade está passando por alterações",
      icon: "info",
      showConfirmButton: false,
      timer: 1700
    });
  }

  const registePageRouter = () => {
    router.push('cadastro');
  }

  // Função para validar e enviar os dados de login para a API
   const validacaoLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Validação de campos
    if (email === "" || password === "" || !email.includes('@') || !email.includes('.com')) {
      invalidDados();
      return;
    }

    try {
      // Enviando os dados para a API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           email: email,
           senha_gestante: password 
          })
      });
      
      const data = await response.json();

      if (response.ok) {

        successLogin();
        router.push('homepage');
        console.log("Login realizado com sucesso:", data);


      } else {

        invalidDados()
        console.log("Erro no login");
      }

    } catch (err) {
      setError("Ocorreu um erro ao tentar logar. Tente novamente mais tarde.");
      console.error("Erro ao fazer login:", err);
      
    }
  };

  return (

    <div className="flex w-screen h-screen p-16 max-sm:p-8 overflow-hidden">

      <div className="h-full w-2/3 flex flex-col justify-center items-center gap-20 max-xl:w-full">

        <div className="flex flex-col gap-14">

          <div className="flex flex-col gap-4 pb-10">
            <Image className="w-[15%]" alt="Lotus Icon" src={LotusIcon}></Image>

            <h1 className="text-gray-3 text-5xl">Login Lótus</h1>
            <h2 className="text-gray-3">Ainda não possui uma conta? <span onClick={registePageRouter} className="hover:text-pink-2 cursor-pointer transition duration-150 ease-in-out">Clique aqui</span> </h2>
          </div>

          {/* Campos para entrada de valor */}

          <form className="flex text-gray-4 flex-col gap-4 w-[40vw] font-ABeeZee max-xl:w-full">

            <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
              <Image className="w-[5%] max-sm:w-50%]" alt="Email Icon" src={EmailIcon}></Image>
              <input type="email" placeholder="Seu email" className="w-full" onChange={(e) => setEmail(e.target.value)}
                aria-label="Seu email"
                required />
            </div>

            <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
              <Image className="w-[5%] max-sm:w-[5%]" alt="Key Icon" src={KeyIcon}></Image>
              <input type="password" placeholder="Sua Senha" className="w-full" onChange={(e) => setPassword(e.target.value)} aria-label="Sua Senha"
                required />
            </div>

            <p onClick={featureConstruction} className="text-pink-3 hover:text-pink-2  hover:cursor-pointer transition duration-150 ease-in-out">Esqueceu sua senha?</p>

          </form>

          <button onClick={validacaoLogin} className="duration-300 bg-gradient-to-r from-pink-3 to-orange-3 w-40 p-4 px-6 items-center justify-between rounded-full text-white flex hover:cursor-pointer hover:scale-95">

            <p className="text-xl">Entrar</p>
            <Image className="w-[20%]" alt="Arrow Icon" src={ArrowIcon}></Image>

          </button>

        </div>

      </div>


      <div className="h-full w-1/3 max-xl:w-0 max-xl:hidden">

        <div className="w-full h-1/3 flex align-top justify-end">
          <Image className="w-[500px] h-[500px] relative bottom-24 left-24" alt="Email Icon" src={CircleDegrade}></Image>
        </div>
        <div className="w-full h-1/3 flex items-center relative">
          <span className="w-[250px] h-[250px] animate-jump-in animate-infinite animate-duration-[6000ms] animate-alternate rounded-full relative bg-pink-3 opacity-40 flex items-center justify-center"></span>
          <Image className="w-[250px] h-[250px] rounded-full relative right-[250px]" alt="Email Icon" src={CircleDegrade}></Image>
        </div>
        <div className="w-full h-1/3 flex justify-end">
          <Image className="w-[450px] h-[450px] rounded-full relative bottom-24 left-24" alt="Email Icon" src={CircleDegrade}></Image>
        </div>

      </div>

    </div>
  );
}