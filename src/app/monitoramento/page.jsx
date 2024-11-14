"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/perfil.png";
import rosa from "@/public/icons/nav/nav-rosa.png";
import logout from "@/public/icons/nav/Ativo/logout.png";
import chat from "@/public/icons/nav/chat.svg";
import monitoramento from "@/public/icons/nav/monitoramento.svg";
import home from "@/public/icons/nav/home.svg";
import nervosaImg from "@/public/icons/emotions/nervosa.png";
import ansiosaImg from "@/public/icons/emotions/ansiosa.png";
import medoImg from "@/public/icons/emotions/medo.png";
import felizImg from "@/public/icons/emotions/feliz.png";
import animadaImg from "@/public/icons/emotions/animada.png";
import calmaImg from "@/public/icons/emotions/calma.png";


// Componente para barra de progresso circular
const CircularProgress = ({ progress, label, color }) => {
    const circumference = 100 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center w-full bg-cover pl-14">
            <svg className="w-32 h-32" viewBox="1 -4 118 128">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e0e0e0" strokeWidth="18" />
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    strokeWidth="18"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    stroke={color}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                />
                <text x="60" y="65" textAnchor="middle" fontSize="24" fill="#333">
                    {`${progress}%`}
                </text>
            </svg>
            <span className="text-center mt-2">{label}</span>
        </div>
    );
};

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] relative h-[70%]">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
                    X
                </button>
                
                {/* Conteúdo do modal com título e botões de humor em duas colunas */}
                <div className="text-center text-gray-500">
                    <h1 className="text-[35px] text-gray-300">Monitoramento de hoje</h1>
                    <div className="w-3/4 mx-auto mt-2 h-1 bg-gray-100 shadow-slate-200"></div>

                    {/* Botões de monitoramento de humor em duas colunas */}
                    <div className="grid grid-cols-2 gap-4 mt-6 mx-auto w-3/4">
                        <button className="flex flex-col items-center justify-center bg-pink-300 text-white w-32 h-32 rounded-lg hover:bg-pink-400 transition">
                            <img src={nervosaImg.src} alt="Nervosa" className="w-12 h-12 mb-2" />
                            <span>Se sentiu nervosa</span>
                        </button>
                        <button className="flex flex-col items-center justify-center bg-yellow-300 text-white w-32 h-32 rounded-lg hover:bg-yellow-400 transition">
                            <img src={ansiosaImg.src} alt="Ansiosa" className="w-12 h-12 mb-2" />
                            <span>Se sentiu ansiosa</span>
                        </button>
                        <button className="flex flex-col items-center justify-center bg-blue-300 text-white w-32 h-32 rounded-lg hover:bg-blue-400 transition">
                            <img src={medoImg.src} alt="Medo" className="w-12 h-12 mb-2" />
                            <span>Sentiu medo</span>
                        </button>
                        <button className="flex flex-col items-center justify-center bg-green-400 text-white w-32 h-32 rounded-lg hover:bg-green-500 transition">
                            <img src={felizImg.src} alt="Feliz" className="w-12 h-12 mb-2" />
                            <span>Se sentiu feliz</span>
                        </button>
                        <button className="flex flex-col items-center justify-center bg-pink-400 text-white w-32 h-32 rounded-lg hover:bg-pink-500 transition">
                            <img src={animadaImg.src} alt="Animada" className="w-12 h-12 mb-2" />
                            <span>Se sentiu animada</span>
                        </button>
                        <button className="flex flex-col items-center justify-center bg-purple-400 text-white w-32 h-32 rounded-lg hover:bg-purple-500 transition">
                            <img src={calmaImg.src} alt="Calma" className="w-12 h-12 mb-2" />
                            <span>Se sentiu calma</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Função principal do componente Home
export default function Home() {
    const [fotos, setFotos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar o dropdown

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const progressData = [
        { label: "Se sentiu nervosa", progress: 75, color: "#FD9999" },
        { label: "Se sentiu ansiosa", progress: 50, color: "#FDD69A" },
        { label: "Sentiu medo", progress: 25, color: "#96A8FD" },
        { label: "Se sentiu feliz", progress: 100, color: "#B0E799" },
        { label: "Se sentiu animada", progress: 100, color: "#FDA2DA" },
    ];

    return (
        <div className="font-ABeeZee bg-white font-inter min-h-screen p-4 lg:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
            <div className="flex flex-col items-start w-full lg:w-1/5 fixed lg:static top-0 left-0">
                <div className="inline-flex items-center mb-4">
                    <Image src={logo} alt="logo" className="w-24 h-16" />
                    <h1 className="text-pink-3 text-lg font-medium ml-2 text-[24px]">Lotus</h1>
                </div>

                {/* Barra lateral de navegação */}
                <button className="w-full text-left text-gray-3 hover:bg-pink-2 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={home} alt="Home" className="w-9 h-9" />
                        <h1 className="font-medium">Home</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-pink-2 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={galeria} alt="Galeria" className="w-9 h-9 " />
                        <h1 className="font-medium">Galeria</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-pink-2 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={perfil} alt="Perfil" className="w-9 h-9 " />
                        <h1 className="font-medium">Perfil</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-pink-2 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={chat} alt="Chat" className="w-9 h-9 " />
                        <h1 className="font-medium">Chat</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-pink-2 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={monitoramento} alt="Monitoramento" className="w-9 h-9" />
                        <h1 className="font-medium">Monitoramento</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-pink-2 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={logout} alt="Logout" className="w-9 h-9" />
                        <h1 className="font-medium">Logout</h1>
                    </div>
                </button>
            </div>

            <div className="bg-gray-1 flex-grow lg:w-[600%] rounded-3xl lg:ml-[20%] p-4 lg:p-8 relative">
                <div className="absolute top-0 left-0 w-full">
                    <Image src={rosa} alt="Nav azul" className="w-full h-32 lg:h-24" />
                </div>

                <div className="mt-16 text-center p-3">
                    <h2 className="text-[35px] font-ABeeZee text-gray-3">Monitoramento</h2>
                    <div className="w-3/4 mx-auto mt-2 h-1 bg-gray-200 shadow-slate-200"></div>
                </div>

                <div className="mt-8 p-7">
                    <h2 className="text-[23px] font-ABeeZee text-gray-4 text-left bg-white rounded-[60px]">
                        Durante a sua gestação você:
                    </h2>
                </div>

                <div className="mt-8 p-7 h-96 overflow-y-auto flex gap-8">
                    {progressData.map((data, index) => (
                        <CircularProgress
                            key={index}
                            progress={data.progress}
                            label={data.label}
                            color={data.color}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-between bg-white p-4 rounded-full">
                    <h1 className="text-gray-4 text-[23px]">
                        Veja com mais detalhes seu monitoramento:
                    </h1>

                    <div className="flex flex-row-reverse gap-2 relative items-center">
                        {/* Botão de Adicionar Monitoramento */}
                        <button
                            onClick={toggleModal}
                            className="bg-pink-3 text-white px-3 py-2 hover:bg-pink-3 transition rounded-2xl"
                        >
                            Adicionar Monitoramento
                        </button>

                        {/* Dropdown de Filtrar por */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                className="bg-white text-pink-3 border-pink-3 border-2 px-3 py-2 rounded-2xl"
                            >
                                Filtrar por ⇩
                            </button>

                            {/* Dropdown aberto */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-pink-3 rounded-md shadow-lg py-1">
                                    <button className="block w-full px-4 py-2 text-left text-pink-3 hover:bg-gray-100">
                                        Últimos 7 dias
                                    </button>
                                    <button className="block w-full px-4 py-2 text-left text-pink-3 hover:bg-gray-100">
                                        Últimos 15 dias
                                    </button>
                                    <button className="block w-full px-4 py-2 text-left text-pink-3 hover:bg-gray-100">
                                        Últimos 30 dias
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>





                </div>

                <div className="bg-pink-400 h-[450px]">
                    <div className="bg-pink-950 h-32">

                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
}
