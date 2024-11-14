"use client";
// Tela Doula

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg"
import SearchIcon from "@/public/icons/utilities/search-dark-grey.svg"
import InfoIcon from "@/public/icons/utilities/info.svg"
import SendIcon from "@/public/icons/utilities/send-white.svg"
import TelefoneIcon from "@/public/icons/utilities/telephone-white.svg"

import LogOutIcon from "@/public/icons/nav/logout.svg"
import HomeIcon from "@/public/icons/nav/home.svg"
import ConteudoIcon from "@/public/icons/nav/conteudos.svg"
import ChatIcon from "@/public/icons/nav/Ativo/chat.svg"
import GaleriaIcon from "@/public/icons/nav/galeria.svg"
import MonitoramentoIcon from "@/public/icons/nav/monitoramento.svg"
import PerfilIcon from "@/public/icons/nav/profile.svg"

//Import dos componentes do nav

import { HomeGestante, HomeGestanteAtivo } from '@/components/nav/home';
import { GaleriaGestante, GaleriaGestanteAtivo } from '@/components/nav/galeria';

import Home from "@/app/page";

export default function Chat() {


    return (

        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-pink-3">
                        <Image className="w-[40px]" alt="Arrow Icon" src={LotusIcon}></Image>
                        <h1 className="font-ABeeZee">Lotus</h1>
                    </div>

                    <ul className="flex flex-col gap-2 max-md:flex-wrap max-md:flex-row max-md:">
                        <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={HomeIcon}></Image>
                            <li>Home</li>
                        </div>

                        <h1>oiiii</h1>

                        <ConteudoIcon>
                            
                        </ConteudoIcon>

                    

                        <div className="flex items-center gap-2 w-44 bg-white p-2 rounded-xl cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={ConteudoIcon}></Image>
                            <li>Conteúdos</li>
                        </div>

                        <div className="flex items-center gap-2 bg-purple-degrade-1 p-2 rounded-xl w-44 cursor-pointer ">
                            <Image className="w-[15px]" alt="Arrow Icon" src={ChatIcon}></Image>
                            <li className="text-purple-degrade-3">Chat</li>
                        </div>

                        <div className="flex items-center gap-2 w-44 bg-white p-2 rounded-xl cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={GaleriaIcon}></Image>
                            <li>Galeria</li>
                        </div>

                        <div className="flex items-center gap-2 w-44 bg-white p-2 rounded-xl cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={MonitoramentoIcon}></Image>
                            <li>Monitoramento</li>
                        </div>

                        <div className="flex items-center gap-2 w-44 bg-white p-2 rounded-xl cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[13px]" alt="Arrow Icon" src={PerfilIcon}></Image>
                            <li>Perfil</li>
                        </div>
                    </ul>
                </div>

                <div className="flex items-center gap-2 cursor-pointer bg-gray-1 rounded-2xl justify-center mt-4">
                    <Image className="w-[15px]" alt="Arrow Icon" src={LogOutIcon}></Image>
                    <h1>Log out</h1>
                </div>

            </nav>

            <main className="w-full h-full bg-gray-1 rounded-2xl">

                <div className="h-20 w-full bg-purple-degrade-3 rounded-3xl flex justify-end">
                    <div className="w-14 h-20 bg-purple-degrade-2 rounded-e-3xl rounded-bl-full"></div>
                    <div className="w-2/3 h-20 bg-purple-degrade-2 flex justify-end rounded-e-3xl ">
                        <div className="w-14 h-20 bg-purple-degrade-1 rounded-e-3xl rounded-bl-full"></div>
                        <div className="w-1/2 h-20 bg-purple-degrade-1 rounded-e-3xl"></div>
                    </div>
                </div>

                <section className="w-full h-full flex">

                    {/* Adicione o conteudo aqui */}

                </section>

            </main>

        </div>
    );
}