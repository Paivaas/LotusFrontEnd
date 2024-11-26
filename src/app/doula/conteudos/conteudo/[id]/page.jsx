'use client'

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/icons/utilities/lotus-icon.svg"
import LogoLogout from "@/public/icons/nav/logout.svg"

// Navegção
import LogoHome from "@/public/icons/nav/home.svg"
import LogoMonitoramento from "@/public/icons/nav/monitoramento.svg"
import LogoConteudo from "@/public/icons/nav/conteudos.svg"
import LogoChat from "@/public/icons/nav/chat.svg"
import LogoGaleria from "@/public/icons/nav/galeria.svg"
import LogoPerfil from "@/public/icons/nav/profile.svg"

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
