"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";


//Import dos componentes do nav
import { PerfilDoula, PerfilDoulaAtivo } from '@/components/nav/perfil';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import CheckList from '@/components/checkList';
import Agenda from '@/components/agenda';
import Loading from '@/components/loading';
import { DegradeOrange, DegradeRed } from '@/components/degrade';
import { HomeDoula, HomeDoulaAtivo } from "@/components/nav/home";
import { ConteudosDoula } from "@/components/nav/conteudos";


export default function Home() {

  return (
    <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

      <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

        <div className="flex flex-col gap-4">

          <NavTop></NavTop>

          <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">

            <HomeDoulaAtivo></HomeDoulaAtivo>
            <ConteudosDoula></ConteudosDoula>
            <PerfilDoula></PerfilDoula>

          </ul>
        </div>

        <Logout></Logout>

      </nav>

      <main className="w-full h-full bg-gray-1 rounded-2xl">


        <section className="w-full h-full flex p-6 gap-3">

          {/* Adicione o conteudo aqui */}

          <div className=" w-1/3 h-[80vh]">

            <Agenda></Agenda>

          </div>

          <div className=" w-1/3 h-[80vh]">

            <CheckList></CheckList>

          </div>






        </section>

      </main>

    </div>
  );
}
