"use client";
// Tela Doula

import Image from "next/image";
import { useState } from "react";
import Swal from 'sweetalert2';

// Import das imagens 

//Import dos componentes do nav
import { HomeGestante, HomeGestanteAtivo } from '@/components/nav/home';
import { GaleriaGestante, GaleriaGestanteAtivo } from '@/components/nav/galeria';
import { MonitoramentoGestante, MonitoramentoGestanteAtivo } from '@/components/nav/monitoramento';
import { PerfilGestante, PerfilGestanteAtivo } from '@/components/nav/perfil';
import { ConteudosGestante, ConteudosGestanteAtivo } from '@/components/nav/conteudos';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradePink } from '@/components/degrade';


import Card from "@/components/conteudos"

export default async function Conteudos() {

    async function getContentAll() {

        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante`
        const response = await fetch(url)
        const data = await response.json()
        return data.conteudosDados

    }

    const conteudo = await getContentAll()


    return (
        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

                <div className="flex flex-col gap-4">

                    <NavTop></NavTop>

                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">
                        <HomeGestante></HomeGestante>
                        <MonitoramentoGestante></MonitoramentoGestante>
                        <ConteudosGestanteAtivo></ConteudosGestanteAtivo>
                        <GaleriaGestante></GaleriaGestante>
                        <PerfilGestante></PerfilGestante>
                    </ul>
                </div>

                <Logout></Logout>


            </nav>

            <main className="w-full h-full bg-gray-1 rounded-2xl">

                <DegradePink></DegradePink>

                <div className="text-center p-7">
                        <h2 className="text-[35px] font-ABeeZee text-gray-3">Conteúdos</h2>
                        <div className="w-3/4 mx-auto mt-2 h-1 bg-[#F6F6F6] shadow-slate-200"></div>
                    </div>

                <section className="w-full h-full flex">

                    {/* Adicione o conteudo aqui */}

                    <div className="h-[60%] flex flex-col justify-between gap-4 px-10 grow" >
                        {/* 1ª fileira de cards */}

                        <div className="flex flex-col gap-2 h-full overflow-y-scroll overscroll-x-none p-4"
                            style={{
                                scrollbarWidth: 'none'
                            }}
                        >

                            <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 h-full">
                                {conteudo.map((item) => {
                                    return <Card usuario="doula" imagem={item.foto_capa} titulo={item.titulo_conteudo} id={item.id_conteudos} key={item.id_conteudos} />
                                })}
                            </div>
                        </div>
                    </div>

                </section>

            </main>

        </div>
    );
}