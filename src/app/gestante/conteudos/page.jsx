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

export default function Conteudos() {


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

                <section className="w-full h-full flex">

                    {/* Adicione o conteudo aqui */}

                </section>

            </main>

        </div>
    );
}