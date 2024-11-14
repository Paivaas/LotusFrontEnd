"use client";
// Tela Doula

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg"
import SearchIcon from "@/public/icons/utilities/search-dark-grey.svg"
import InfoIcon from "@/public/icons/utilities/info.svg"
import SendIcon from "@/public/icons/utilities/send-white.svg"

import LogOutIcon from "@/public/icons/nav/logout.svg"
import HomeIcon from "@/public/icons/nav/home.svg"
import ConteudoIcon from "@/public/icons/nav/conteudos.svg"
import ChatIcon from "@/public/icons/nav/Ativo/chat.svg"
import GaleriaIcon from "@/public/icons/nav/galeria.svg"
import MonitoramentoIcon from "@/public/icons/nav/monitoramento.svg"
import PerfilIcon from "@/public/icons/nav/profile.svg"



export default function Chat() {


    return (

        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden">

            <nav className="flex flex-col justify-between text-gray-3">

                <div className="flex flex-col gap-10">
                    <button>
                    <div className="flex items-center gap-2 text-pink-3">
                        <Image className="w-[40px]" alt="Arrow Icon" src={LotusIcon}></Image>
                        <h1 className="font-ABeeZee">Lotus</h1>
                    </div>
                    </button>

                    <ul className="flex flex-col gap-2 ">

                        <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={HomeIcon}></Image>
                            <li>Home</li>
                        </div>

                        <div className="flex items-center gap-2 w-44 bg-white p-2 rounded-xl cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={ConteudoIcon}></Image>
                            <li>Conteúdos</li>
                        </div>

                        <div className="flex items-center gap-2 bg-purple-degrade-1 p-2 rounded-xl w-44 cursor-pointer">
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

                <div className="flex items-center gap-2 cursor-pointer">
                    <Image className="w-[15px]" alt="Arrow Icon" src={LogOutIcon}></Image>
                    <h1>Log out</h1>
                </div>

            </nav>

            <main className="w-full bg-gray-2 rounded-2xl">

                <div className="h-16 w-full bg-purple-degrade-3 rounded-2xl flex justify-end">
                    <div className="w-14 h-16 bg-purple-degrade-2 rounded-e-2xl rounded-bl-full"></div>
                    <div className="w-2/3 h-16 bg-purple-degrade-2 flex justify-end rounded-e-2xl ">
                        <div className="w-14 h-16 bg-purple-degrade-1 rounded-e-2xl rounded-bl-full"></div>
                        <div className="w-1/2 h-16 bg-purple-degrade-1 rounded-e-2xl"></div>
                    </div>
                </div>

                <section className="w-full h-full flex">

                    {/* Toggle pra atendimento */}
                    <div className="w-2/5 p-6 flex flex-col gap-2">
                        <div className="flex items-center text-xs gap-2 bg-white rounded-2xl p-2">
                            <input type="checkbox" />
                            <p>Habilitar disponibilidade para atendimento.</p>
                        </div>

                        <h1 className="font-bold">Chats</h1>


                        {/* Input pra realizar buscas de contatos */}
                        <div className="flex bg-white rounded-2xl p-2 gap-2">
                            <Image className="w-[15px]" alt="Arrow Icon" src={SearchIcon}></Image>
                            <input className="w-full" type="text" placeholder="Procurar contatos" />
                        </div>

                        {/* Contatos Aqui */}
                        <div>

                            <div className="cursor-pointer bg-white rounded-2xl py-2 px-4 flex gap-2 items-start justify-between">
                                <div className="flex gap-2 items-center">
                                    {/* Foto de perfil */}
                                    <div className="w-14 h-14 bg-gray-3 rounded-full overflow-clip"></div>
                                    {/* Info do contato */}
                                    <div>
                                        <h1>Vitoria Castro</h1>
                                        <p className="text-gray-3">ultima mensagem</p>
                                    </div>
                                </div>
                                {/* Notificacao novas mensagens  */}
                                <div className="w-2 h-2 bg-pink-3 shadow-xl rounded-full overflow-clip"></div>
                            </div>

                        </div>

                    </div>

                    {/* Chat */}
                    <div className="bg-white w-full flex flex-col p-6 justify-between shadow-lg shadow-gray-3">

                        <section>
                            {/* infos do contato selecionado */}
                            <div className="flex justify-between">

                                {/* Foto de perfil */}
                                <div className="flex gap-2 items-center ">
                                    <div className="w-14 h-14 bg-gray-3 rounded-full overflow-clip"></div>
                                    {/* Info do contato */}
                                    <div>
                                        <p className="text-gray-3 text-sm">Bate papo com:</p>
                                        <h1 className="font-semibold">Vitoria Castro</h1>
                                    </div>
                                </div>
                                {/* Botao pra reportar contato */}
                                <Image className="w-[40px] cursor-pointer" alt="Arrow Icon" src={InfoIcon}></Image>
                            </div>

                            {/* Divisoria */}
                            <div className="h-1 bg-gray-2 my-4 rounded-2xl"></div>
                        </section>

                        {/* MENSAGENS AQUI */}
                        <section className="w-full h-full">

                        </section>

                        {/* Input pra enviar mensagens */}
                        <div className="flex bg-gray-2 rounded-full p-2 px-4 gap-2 justify-between items-center relative bottom-8">
                            <input className="bg-gray-2 w-full" type="text" placeholder="Escreva sua mensagem" />
                            <Image className="w-[35px] h-[35px] bg-gradient-to-r from-purple-degrade-1 to-purple-degrade-3 rounded-full p-[4px]" alt="Arrow Icon" src={SendIcon}></Image>
                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
}