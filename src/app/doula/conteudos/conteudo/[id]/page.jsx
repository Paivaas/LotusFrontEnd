'use client'

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/icons/utilities/lotus-icon.svg"
import LogoLogout from "@/public/icons/nav/logout.svg"

// Navegção
import { PerfilDoula, PerfilDoulaAtivo } from '@/components/nav/perfil';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradePink } from '@/components/degrade';
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoula, ConteudosDoulaAtivo } from "@/components/nav/conteudos";


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

    const getDados = async (id) => {

        const dado = await getContentID(id)
        if (dado) {
            console.log(dado);
            setDados(dado)
        }
    }

    return (

        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

                <div className="flex flex-col gap-4">

                    <NavTop></NavTop>

                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">

                        <HomeDoula></HomeDoula>
                        <ConteudosDoulaAtivo></ConteudosDoulaAtivo>
                        <PerfilDoula></PerfilDoula>

                    </ul>
                </div>

                <Logout></Logout>

            </nav>

            <main className="w-full h-full bg-gray-1 rounded-2xl">

                <DegradePink></DegradePink>

                <div className="bg-gray-1 w-full h-full rounded-[40px] overflow-hidden">
                    
                    {/* Card Conteudo */}
                    {dados && (
                        <ConteudoID imagem={dados[0].foto_capa} titulo={dados[0].titulo_conteudo} data={dados[0].data_conteudo} texto={dados[0].conteudo} />
                    )}



                </div>

            </main>

        </div>



    )
}
