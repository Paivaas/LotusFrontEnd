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
import { transform } from "next/dist/build/swc";

// Componente para barra de progresso circular
const CircularProgress = ({ progress, label, color }) => {
    const circumference = 100 * Math.PI; // Circunferência do círculo
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center bg-cover pl-14 ">
            <svg className="w-32 h-32" viewBox="1 -2 120 128">
                <circle
                    cx="60" // Centralizando o círculo com o novo viewBox
                    cy="60"
                    r="54" // Ajustando o raio para se manter proporcional ao novo viewBox
                    fill="none"
                    stroke="#e0e0e0" // Cor do círculo de fundo
                    strokeWidth="15" // Largura do círculo de fundo
                />
                <circle
                    cx="60" // Centralizando o círculo de progresso
                    cy="60"
                    r="54"
                    fill="none"
                    strokeWidth="15" // Largura do círculo de progresso
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    stroke={color} // Usando a cor passada como prop
                    transform="rotate(-90 60 60)" // Centralizando a rotação com o novo viewBox
                />
                <text
                    x="60" // Centralizando o texto
                    y="65"
                    textAnchor="middle"
                    fontSize="24" // Ajuste opcional do tamanho da fonte
                    fill="#333"
                >
                    {`${progress}%`}
                </text>
            </svg>
            <span className="text-center mt-2">{label}</span>
        </div>
    );
};


// Componente para o modal de upload
const UploadModal = ({ isOpen, onClose, onUpload }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        if (selectedImage && title && description) {
            onUpload({ url: selectedImage, title, description });
            setSelectedImage(null);
            setTitle("");
            setDescription("");
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-15">
            <div className="bg-[#FBFBFB] rounded-[25px] p-6 w-11/12 md:w-1/2 max-w-4xl">
                <div className="flex mb-4">
                    <label className="w-1/2">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                        {selectedImage ? (
                            <div className="w-96 h-96 border-2 border-dashed border-gray-400 flex items-center justify-center overflow-hidden rounded">
                                <Image
                                    src={selectedImage}
                                    alt="Preview"
                                    className="object-cover w-full h-full"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-gray-400 h-32 w-96 flex items-center justify-center rounded">
                            </div>
                        )}
                    </label>
                    <div className="ml-44 flex-1 h-[500px]">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título"
                            className="bg-transparent rounded p-2 mb-2 w-full"
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição"
                            className="bg-transparent rounded p-2 w-full h-24"
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4 gap-4">
                    <button
                        onClick={handleUpload}
                        className="bg-[#DCEFC4] text-[#97CC58] w-28 p-2 border-gray-300 shadow-md border rounded-[10px]"
                    >
                        Salvar
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-[#FFDAE1] text-[#FFAEBF] w-28 p-2 border-gray-300 shadow-md border rounded-[10px]"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>

    );
};

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

    const progressData = [
        { label: "Se sentiu nervosa", progress: 75, color: "#FF0000" }, // Vermelho
        { label: "Se sentiu ansiosa", progress: 50, color: "#00FF00" }, // Verde
        { label: "Sentiu medo", progress: 25, color: "#0000FF" }, // Azul
        { label: "Se sentiu feliz", progress: 100, color: "#FFFF00" }, // Amarelo
        { label: "Se sentiu animada", progress: 100, color: "#FF00FF" }, // Magenta
    ];

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
                <div className="mt-2">
                    <h2 className="text-[15px] font-ABeeZee text-gray-4 text-left bg-white rounded-[60px]" style={trans}>
                        Veja com mais detalhes seu monitoramento:
                    </h2>
                </div>
                    <div>

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
