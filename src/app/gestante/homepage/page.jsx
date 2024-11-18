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

// Outros
import LogoBaby from "@/public/icons/profile-information/pink/baby.svg"
import LogoSeta from "@/public/icons/utilities/arrow-pink.svg"

// Icones
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

// Quadro
import Flor from "@/components/quadro";
import { useState } from "react";

// Calendário
import Calendar from "react-calendar";
import '@/../src/styles/Calendar.css';


//Import dos componentes do nav
import { HomeGestante, HomeGestanteAtivo } from '@/components/nav/home';
import { GaleriaGestante, GaleriaGestanteAtivo } from '@/components/nav/galeria';
import { MonitoramentoGestante, MonitoramentoGestanteAtivo } from '@/components/nav/monitoramento';
import { PerfilGestante, PerfilGestanteAtivo } from '@/components/nav/perfil';
import { ConteudosGestante, ConteudosGestanteAtivo } from '@/components/nav/conteudos';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradeOrange2 } from '@/components/degrade';

export default async function Home() {

  // async function getGestante() {

  //     const url = `https://lotus-back-end.onrender.com/v1/Lotus/cadastro/gestante` 
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     return data.conteudosDados

  // }    

  // const gestante = {
  //     nome: "Juliana"
  // }

  // const info = await getFlor()

  // async function getFlor(id) {
  //   const url = `https://lotus-back-end.onrender.com/v1/Lotus/cadastro/gestante`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   return data.gestanteDados

  // }

  // const conteudo = await getFlor()


  return (
    <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

      <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

        <div className="flex flex-col gap-4">

          <NavTop></NavTop>

          <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">
            <HomeGestanteAtivo></HomeGestanteAtivo>
            <MonitoramentoGestante></MonitoramentoGestante>
            <ConteudosGestante></ConteudosGestante>
            <GaleriaGestante></GaleriaGestante>
            <PerfilGestante></PerfilGestante>
          </ul>
        </div>

        <Logout></Logout>


      </nav>

      <main className="w-full h-full bg-gray-1 rounded-2xl">

        <section className="w-full h-full flex">

          {/* Adicione o conteudo aqui */}


          <main className="p-10 grid grid-cols-2 gap-2 justify-between w-full">
        {/* telinha 1 */}
        <div className="h-full bg-gray-2 p-6 rounded-[40px] flex flex-col gap-10">
          {/* Título e descrição */}
          <div className="flex flex-col gap-2">
            <h2 className="font-ABeeZee text-black font-medium">
              Olá,
              {/* <span>{info.nome_gestante}</span>  */}
            </h2>
            <p className="font-Inter font-light text-gray-4 text-xs">
              Estamos aqui para acompanhar cada passo dessa jornada incrível, oferecendo suporte, dicas e informações personalizadas para você e seu bebê.
            </p>
          </div>
          {/* quadro */}
          {/* {conteudo.map(item)=>{
              return <Flor imagem={item.foto_flor}></>
            }} */}
          <div className="flex items-center justify-center">
            <div className="h-[440px] w-[440px] bg-white rounded-xl border-4 border-pink-3 flex items-center justify-center">
              <Image src={LogoBaby} alt="chat" className="size-1/2"></Image>
            </div>
          </div>
          {/* cards */}
          <div className="flex items-center justify-center flex-col gap-2">
            {/* card de progresso */}
            <div className="h-20 w-[440px] bg-orange-1 rounded-md border-2 border-orange-degrade-1 p-4 flex flex-col gap-2">
              <p className="flex font-ABeeZee text-orange-degrade-1">
                12 semanas restantes
              </p>
              {/* degradê */}
              <div className="bg-pink-degrade-3 flex flex-row w-full h-4 justify-end rounded-s-[40px] rounded-e-[40px] overflow-hidden">
                <div className="bg-pink-degrade-2 w-2/3 flex justify-end rounded-b-full">
                  <div className="bg-pink-degrade-1 w-1/2 rounded-bl-full"></div>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="h-20 w-[440px] bg-white rounded-md p-4 flex flex-row shadow-lg gap-6 justify-between">
              <Image src={LogoBaby} alt="chat" className="size-14"></Image>
              <div className="">
                <h1 className="font-Inter text-lg text-gray-4">
                  Enxoval
                </h1>
                <p className="font-Inter text-sm text-gray-4">
                  Monte seu enxoval no checkList
                </p>
              </div>
              <button className="">
                <Image src={LogoSeta} alt="seta" className="size-14"></Image>
              </button>
            </div>
          </div>
        </div>
        {/* telinha 2 */}
        <div className="bg-gray-1 h-full rounded-[36px] overflow-hidden">
          {/* degradê */}
          <DegradeOrange2></DegradeOrange2>
          {/* calendário */}
          <div className="flex flex-col px-28 py-20 gap-4">
            {/* card título */}
            <div className="flex items-baseline">
              <h1 className="text-3xl text-orange-5 font-Inter">
                Agenda
              </h1>
            </div>
            {/* card do calendário */}
            <div className="h-60 w-full bg-transparent ">
              {/* calendário */}
              <Calendar></Calendar>

            </div>
            {/* cards de eventos */}
            {/* <div className="h-28 w-full bg-orange-100 rounded-lg p-4">
                <div className="flex flex-row items-baseline gap-2 pb-4">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                    <p className="font-Inter text-pink-4 text-xs">
                      20
                    </p>
                  </div>
                  <p className="font-Inter text-xs text-[#af9676] font-semibold">
                    Me ajuda Deus, ta foda esse tcc
                  </p>
                </div>
                <div className="grid grid-cols-2 px-12">
                  <div className="flex flex-row items-center gap-2">
                    <FaCalendarAlt className="text-[#af9676] h-4 w-5"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaRegClock className="text-[#af9676] h-4 w-4"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-28 w-full bg-orange-100 rounded-lg p-4">
                <div className="flex flex-row items-baseline gap-2 pb-4">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                    <p className="font-Inter text-pink-4 text-xs">
                      20
                    </p>
                  </div>
                  <p className="font-Inter text-xs text-[#af9676] font-semibold">
                    Me ajuda Deus, ta foda esse tcc
                  </p>
                </div>
                <div className="grid grid-cols-2 px-12">
                  <div className="flex flex-row items-center gap-2">
                    <FaCalendarAlt className="text-[#af9676] h-4 w-5"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaRegClock className="text-[#af9676] h-4 w-4"/>
                    <p className="font-Inter text-xs text-[#af9676] font-normal">
                      27 jan 2024
                    </p>
                  </div>
                </div>
              </div> */}
            {/* botão de adicionar evento */}
            {/* <button className="group h-16 w-full bg-pink-degrade-1 rounded-2xl flex flex-row items-center p-4 gap-2 hover:bg-pink-2">
                <IoAdd className="text-pink-4 h-10 w-10"/>
                <p className="text-lg text-pink-4 font-normal font-Inter">
                  Adicionar Evento
                </p>
              </button>  */}
          </div>
  
        </div>
      </main>












        </section>

      </main>

    </div>
  )
}