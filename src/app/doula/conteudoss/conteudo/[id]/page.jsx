'use client'

import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/icons/utilities/lotus-icon.svg"
import LogoLogout from "@/../public/icons/nav/logout.svg"

// Navegção
import LogoHome from "@/../public/icons/nav/home.svg"
import LogoMonitoramento from "@/../public/icons/nav/monitoramento.svg"
import LogoConteudo from "@/../public/icons/nav/conteudos.svg"
import LogoChat from "@/../public/icons/nav/chat.svg"
import LogoGaleria from "@/../public/icons/nav/galeria.svg"
import LogoPerfil from "@/../public/icons/nav/profile.svg"

// Componente
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ConteudoID from "@/components/ConteudoID";
// preciso da função de id

export default function Home() {

    const [dados, setDados] = useState()
    const params = useParams()

    async function getContentID(id) {

        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudo/gestante/${id}`
        const response = await fetch(url)
        const data = await response.json()
        return data.conteudo

    }

    useEffect(() => {
        getDados(params.id)
    }, [params])

    const getDados = async(id) => {   
        
        const dado = await getContentID(id)        
        if(dado){
            console.log(dado);
            setDados(dado)
        }
    }   

    return (
        <div className="flex h-screen">
            <header className="flex flex-col md:w-[20%] py-10 px-10">
                {/* lótus */}
                <div className="flex flex-row items-center gap-2 pb-16">
                    <Image src={Logo} alt="logo" priority className="size-16"></Image>
                    <h1 className="font-ABeeZee text-pink-3 font-light text-3xl text-center">
                        Lótus
                    </h1>
                </div>
                {/* navegação */}
                <nav className="flex flex-col gap-10 h-[80%]">
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoHome} alt="home" className="fill-current group-hover:text-white size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Home
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoMonitoramento} alt="monitoramento" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Monitoramento
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoConteudo} alt="conteudo" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Conteúdo
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoChat} alt="chat" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Chat
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoGaleria} alt="galeria" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Galeria
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoPerfil} alt="perfil" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Perfil
                        </h1>
                    </a>
                </nav>
                {/* botão sair */}
                <button className="flex flex-row gap-2 items-center">
                    <Image src={LogoLogout} alt="logout" className="size-8"></Image>
                    <p className="font-Inter font-normal text-gray-3 text-lg hover:text-pink-degrade-3">
                        Log out
                    </p>
                </button>
            </header>
            <main className="w-[80%] bg-white p-10">
                {/* conteúdo */}
                <div className="bg-gray-1 w-full h-full rounded-[40px] overflow-hidden">
                    {/* degradê */}
                    <div className="bg-pink-degrade-3 flex flex-row w-full h-20 justify-end rounded-tl-[40px] overflow-hidden">
                        <div className="bg-pink-degrade-2 w-2/3 h-20 flex justify-end rounded-b-full">
                            <div className="bg-pink-degrade-1 w-1/2 h-20 rounded-bl-full"></div>
                        </div>
                    </div>
                    {/* Card Conteudo */}
                    {dados && (
                        <ConteudoID imagem={dados[0].foto_capa} titulo={dados[0].titulo_conteudo} data={dados[0].data_conteudo} texto={dados[0].conteudo} />
                    ) }
                   

        
                </div>
            </main>
        </div>
    )
}
