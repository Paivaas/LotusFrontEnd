"use client";
// Tela Doula

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg"

//Import dos componentes do nav
import { HomeGestante, HomeGestanteAtivo } from '@/components/nav/home';
import { GaleriaGestante, GaleriaGestanteAtivo } from '@/components/nav/galeria';
import { MonitoramentoGestante, MonitoramentoGestanteAtivo } from '@/components/nav/monitoramento';
import { PerfilGestante, PerfilGestanteAtivo } from '@/components/nav/perfil';
import { ConteudosGestante, ConteudosGestanteAtivo } from '@/components/nav/conteudos';
import { Logout } from '@/components/nav/logout';
import { DegradePurple } from '@/components/degrade';

export default async function Chat() {

    const [dados, setDados] = useState()
    const params = useParams()

    async function getContentID(id) {
        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudo/gestante/${id}`
        const response = await fetch(url)
        console.log(response);
        const data = await response.json()
        return data.conteudo

    }

    const getDados = async(id) => {   
        
        const dado = await getContentID(id)        
        if(dado){
            console.log(dado);
            setDados(dado)
        }
    }   

    useEffect(() => {
        getDados(params.id)
    }, [params])

    return (

        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-pink-3">
                        <Image className="w-[40px]" alt="Arrow Icon" src={LotusIcon}></Image>
                        <h1 className="font-ABeeZee">Lotus</h1>
                    </div>

                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">
                        <HomeGestante></HomeGestante>
                        <MonitoramentoGestante></MonitoramentoGestante>
                        <ConteudosGestante></ConteudosGestante>
                        <GaleriaGestante></GaleriaGestante>
                        <PerfilGestante></PerfilGestante>
                    </ul>
                </div>

                <Logout></Logout>

            </nav>

            <main className="w-full h-full bg-gray-1 rounded-2xl">

                <DegradePurple></DegradePurple>

                <section className="w-full h-full flex">

                    {/* Adicione o conteudo aqui */}

                    <div className="bg-gray-1 w-full h-full rounded-[40px] overflow-hidden">
                        {/* degradê */}
                        <div className="bg-pink-degrade-3 flex flex-row w-full h-20 justify-end rounded-tl-[40px] overflow-hidden">
                            <div className="bg-pink-degrade-2 w-2/3 h-20 flex justify-end rounded-b-full">
                                <div className="bg-pink-degrade-1 w-1/2 h-20 rounded-bl-full"></div>
                            </div>
                        </div>
                        {/* Card Conteudo */}
                        {dados && (
                            <ConteudoID usuario="gestante" imagem={dados[0].foto_capa} titulo={dados[0].titulo_conteudo} data={dados[0].data_conteudo} texto={dados[0].conteudo} />
                        )}



                    </div>

                </section>

            </main>

        </div>
    );
}