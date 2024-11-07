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
// Componente para barra de progresso circular
const CircularProgress = ({ progress, label, id }) => {
    const circumference = 100 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    // Definindo a cor com base no ID
    const colors = {
        1: "#FF6347", // Vermelho
        2: "#00FF00", // Verde
        3: "#0000FF", // Azul
        4: "#FFFF00", // Amarelo
        5: "#FF00FF", // Magenta
    };
    const color = colors[id] || "#000"; // Cor padrão caso o ID não corresponda

    return (
        <div className="flex flex-col items-center bg-cover pl-14">
            <svg className="w-32 h-32" viewBox="1 -2 120 128">
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="15"
                />
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    strokeWidth="15"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    stroke={color} // Usando a cor definida pelo ID
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

// Dados de progresso com ID adicionado
const progressData = [
    { id: 1, label: "Se sentiu nervosa", progress: 75 },
    { id: 2, label: "Se sentiu ansiosa", progress: 50 },
    { id: 3, label: "Sentiu medo", progress: 25 },
    { id: 4, label: "Se sentiu feliz", progress: 100 },
    { id: 5, label: "Se sentiu animada", progress: 100 },
];

// Uso do componente CircularProgress com IDs específicos
export default function Home() {
    return (
        <div className="mt-8 p-7 h-96 overflow-y-auto flex gap-8">
            {progressData.map((data) => (
                <CircularProgress
                    key={data.id}
                    progress={data.progress}
                    label={data.label}
                    id={data.id} // Passando o ID para definir a cor
                />
            ))}
        </div>
    );

// Função principal do componente Home
export default function Home() {
    const [fotos, setFotos] = useState([]);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    const toggleUploadModal = () => {
        setIsUploadModalOpen(!isUploadModalOpen);
    };

    const handleUploadPhoto = ({ url, title, description }) => {
        setFotos((prevFotos) => [...prevFotos, { url, title, description }]);
    };

    const handleImageClick = (foto) => {
        alert(`Título: ${foto.title}\nDescrição: ${foto.description}`);
    };

   

    return (
        <div className="font-ABeeZee bg-white font-inter min-h-screen p-4 lg:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
            <div className="flex flex-col items-start w-full lg:w-1/5 fixed lg:static top-0 left-0">
                <div className="inline-flex items-center mb-4">
                    <Image src={logo} alt="logo" className="w-24 h-16" />
                    <h1 className="text-pink-3 text-lg font-medium ml-2 text-[24px]">Lotus</h1>
                </div>

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
                        <Image src={monitoramento} alt="Monitoramento" className="w-9 h-9 " />
                        <h1 className="font-medium">Monitoramento</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-pink-2 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={conteudos} alt="Conteúdos" className="w-9 h-9 " />
                        <h1 className="font-medium">Conteúdos</h1>
                    </div>
                </button>

                <button className="absolute bottom-8 left-4">
                    <div className="flex items-center">
                        <Image src={logout} alt="Logout" />
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
                    <h2 className="text-[15px] font-ABeeZee text-gray-4 text-left bg-white rounded-[60px]">
                        Durante a sua gestação você: 
                    </h2>
                </div>

                <div className="mt-8 p-7 h-96 overflow-y-auto flex gap-8">
                    {progressData.map((data, index) => (
                        <CircularProgress
                            key={index}
                            progress={data.progress}
                            label={data.label}
                        />
                    ))}
                </div>
            </div>

            <UploadModal
                isOpen={isUploadModalOpen}
                onClose={toggleUploadModal}
                onUpload={handleUploadPhoto}
            />
        </div>
    );
}
