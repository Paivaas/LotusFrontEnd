"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/perfil.png";
import azul from "@/public/icons/nav/nav-azul.png";
import logout from "@/public/icons/nav/Ativo/logout.png";
import chat from "@/public/icons/nav/chat.svg";
import monitoramento from "@/public/icons/nav/monitoramento.svg";
import home from "@/public/icons/nav/home.svg";

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
            <div className="bg-[#E1EDF2] rounded-[25px] p-6 w-11/12 md:w-1/2 max-w-4xl">
                <h2 className="text-lg font-ABeeZee text-gray-4 mb-4">Adicionar Lembrança</h2>
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
                            <div className="border-2 border-dashed border-gray-400 h-96 w-96 flex items-center justify-center rounded">
                                <span className="text-gray-500">Escolher imagem</span>
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

                <button className="w-full text-left text-gray-3 hover:bg-blue-100 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={home} alt="Home" className="w-9 h-9" />
                        <h1 className="font-medium">Home</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-blue-100 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={galeria} alt="Galeria" className="w-9 h-9 " />
                        <h1 className="font-medium">Galeria</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-blue-100 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={perfil} alt="Perfil" className="w-9 h-9 " />
                        <h1 className="font-medium">Perfil</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-blue-100 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={chat} alt="Chat" className="w-9 h-9 " />
                        <h1 className="font-medium">Chat</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-blue-100 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={monitoramento} alt="Monitoramento" className="w-9 h-9 " />
                        <h1 className="font-medium">Monitoramento</h1>
                    </div>
                </button>

                <button className="w-full text-left text-gray-3 hover:bg-blue-100 rounded-[10px] transition duration-200 transform hover:scale-105">
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
                    <Image src={azul} alt="Nav azul" className="w-full h-32 lg:h-24" />
                    <button
                        onClick={toggleUploadModal}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-300 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-300 hover:text-white"
                    >
                        + Adicionar lembrança
                    </button>
                </div>

                <div className="mt-16 text-center p-7">
                    <h2 className="text-[35px] font-ABeeZee text-gray-3">Galeria</h2>
                    <div className="w-3/4 mx-auto mt-2 h-1 bg-gray-200 shadow-slate-200"></div>
                </div>

                <div className="mt-8 p-7">
                    <h2 className="text-[25px] font-ABeeZee text-gray-4 text-left">Meu bebê</h2>
                </div>

                <div className="mt-8 p-7 h-96 overflow-y-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {fotos.map((foto, index) => (
                            <div key={index} className="w-64 h-64 relative">
                                <Image
                                    src={foto.url}
                                    alt={`Foto ${index + 1}`}
                                    className="object-cover rounded-lg w-full h-full"
                                    width={200}
                                    height={200}
                                />
                                <div
                                    className="absolute inset-0 bg-gray-2 bg-opacity-5 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                                    onClick={() => handleImageClick(foto)}
                                >
                                    <h2 className="text-gray-4 font-bold text-center">{foto.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
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
    