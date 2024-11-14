"use client";

import { useState } from "react";
import Image from "next/image";
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/perfil.png";
import azul from "@/public/icons/nav/nav-azul.png";
import logout from "@/public/icons/nav/Ativo/logout.png";
import chat from "@/public/icons/nav/chat.svg";
import monitoramento from "@/public/icons/nav/monitoramento.svg";
import home from "@/public/icons/nav/home.svg";


import LogOutIcon from "@/public/icons/nav/logout.svg"
import HomeIcon from "@/public/icons/nav/home.svg"
import ConteudoIcon from "@/public/icons/nav/conteudos.svg"
import ChatIcon from "@/public/icons/nav/chat.svg"
import GaleriaIcon from "@/public/icons/nav/Ativo/galeria.svg"
import MonitoramentoIcon from "@/public/icons/nav/monitoramento.svg"
import PerfilIcon from "@/public/icons/nav/profile.svg"

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
                            <div className="border-2 border-dashed border-gray-400 h-[550px] w-[500px] flex items-center justify-center rounded">
                                <span className="text-gray-500">Escolher imagem</span>
                            </div>
                        )}
                    </label>
                    <div className="ml-24 flex-1 h-[500px]">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título"
                            className="bg-transparent rounded p-2 mb-9 w-full text-[30px]"
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição"
                            className="bg-transparent rounded p-2 w-full h-24 text-[20px]"
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
        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden">

            <nav className="flex flex-col justify-between text-gray-3">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-pink-3">
                        <Image className="w-[40px]" alt="Arrow Icon" src={LotusIcon}></Image>
                        <h1 className="font-ABeeZee">Lotus</h1>
                    </div>

                    <ul className="flex flex-col gap-2 ">
                        <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={HomeIcon}></Image>
                            <li>Home</li>
                        </div>

                        <div className="flex items-center gap-2 w-44 bg-white p-2 rounded-xl cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={ConteudoIcon}></Image>
                            <li>Conteúdos</li>
                        </div>

                        <div className="flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                            <Image className="w-[15px]" alt="Arrow Icon" src={ChatIcon}></Image>
                            <li>Chat</li>
                        </div>

                        <div className="flex items-center gap-2 w-44 bg-blue-degrade-1 p-2 rounded-xl cursor-pointer ">
                            <Image className="w-[15px]" alt="Arrow Icon" src={GaleriaIcon}></Image>
                            <li className="text-blue-degrade-3">Galeria</li>
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

            <main className="w-full h-full bg-gray-1 rounded 3xl">

                <div className="h-20 w-full bg-blue-degrade-3 rounded-3xl flex justify-end">
                    <div className="w-14 h-20 bg-blue-degrade-2 rounded-e-2xl rounded-bl-full"></div>
                    <div className="w-2/3 h-20 bg-blue-degrade-2 flex justify-end rounded-e-3xl ">
                        <div className="w-14 h-20 bg-blue-degrade-1 rounded-e-3xl rounded-bl-full"></div>
                        <div className="w-1/2 h-20 bg-blue-degrade-1 rounded-e-3xl"></div>
                    </div>
                </div>

                <section className="w-full h-full">

                    {/* Adicione o conteudo aqui */}

                    <div className="font-ABeeZee bg-white font-inter min-h-screen  flex flex-col  gap-8 overflow-hidden">

                        <div className="">

                            <div className="absolute top-0 left-0 w-full">
                                {/* <Image src={azul} alt="Nav azul" className="w-full h-32 lg:h-24" /> */}
                                <button
                                    onClick={toggleUploadModal}
                                    className="absolute top-10 right-12 bg-white text-blue-300 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-degrade-3 hover:text-white  transition duration-150 ease-in-out"
                                >
                                    + Adicionar lembrança
                                </button>
                            </div>

                            <div className="text-center p-7">
                                <h2 className="text-[35px] font-ABeeZee text-gray-3">Galeria</h2>
                                <div className="w-3/4 mx-auto mt-2 h-1 bg-gray-200 shadow-slate-200"></div>
                            </div>

                            <div className="mt-8 p-7">
                                <h2 className="text-[25px] font-ABeeZee text-gray-4 text-left">Meu bebê</h2>
                            </div>

                            <div id="Imagens" className="mt-2 h-[55vh] overflow-y-auto">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                    {fotos.map((foto, index) => (
                                        <div key={index} className="relative bg-blue-degrade-1 p-8 flex items-center justify-center">
                                            <Image
                                                src={foto.url}
                                                alt={`Foto ${index + 1}`}
                                                className="object-cover w-80 h-80 bg-[#E1EDF2]"
                                                width={256}
                                                height={256}
                                            />
                                            <div
                                                className="absolute inset-0 bg-gray-200 bg-opacity-5 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                                                onClick={() => handleImageClick(foto)}
                                            >
                                                <h2 className="text-gray-700 text-center bg-gray-1 px-2 rounded-lg">{foto.title}</h2>
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

                </section>

            </main>

        </div>
    );
}
