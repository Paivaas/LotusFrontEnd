"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from 'sweetalert2';

//Import dos componentes do nav
import { HomeGestante, HomeGestanteAtivo } from '@/components/nav/home';
import { GaleriaGestante, GaleriaGestanteAtivo } from '@/components/nav/galeria';
import { MonitoramentoGestante, MonitoramentoGestanteAtivo } from '@/components/nav/monitoramento';
import { PerfilGestante, PerfilGestanteAtivo } from '@/components/nav/perfil';
import { ConteudosGestante, ConteudosGestanteAtivo } from '@/components/nav/conteudos';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradeBlue } from '@/components/degrade';

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

    const modal = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Sua lembrança foi salva",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const handleUpload = () => {
        if (selectedImage && title && description) {
            onUpload({ url: selectedImage, title, description });
            setSelectedImage(null);
            setTitle("");
            setDescription("");
            modal();
            onClose();

        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-15">
            <div className="bg-[#E1EDF2] rounded-[25px] p-6 w-11/12 md:w-1/2 max-w-4xl">
                <div className="flex max-2xl:flex-col mb-4">
                    <label className="w-1/2 max-xl:w-full">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                        {selectedImage ? (
                            <div className="w-96 max-xl:w-full h-96 border-2 border-dashed border-gray-400 flex items-center justify-center overflow-hidden rounded">
                                <Image
                                    src={selectedImage}
                                    alt="Preview"
                                    className="object-cover w-full h-full"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-gray-400 h-[550px] w-[500px] max-xl:w-full max-xl:h-96 flex items-center justify-center rounded ">
                                <span className="text-gray-500">Escolher imagem</span>
                            </div>
                        )}
                    </label>
                    <div className="ml-24 flex-1 h-[500px]  max-xl:ml-0">
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

export default function Galeria() {
    const [fotos, setFotos] = useState([]);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    const toggleUploadModal = () => {
        setIsUploadModalOpen(!isUploadModalOpen);

    };

    const handleUploadPhoto = ({ url, title, description }) => {
        setFotos((prevFotos) => [...prevFotos, { url, title, description }]);
    };

    const handleImageClick = (foto) => {
        // alert(`Título: ${foto.title}\nDescrição: ${foto.description}`);

        Swal.fire({
            title: `${foto.title}`,
            imageUrl: `${foto.url}`,
            imageHeight: 300,
            text: `${foto.description}`,
            confirmButtonColor: '#BCE0EF',
            confirmButtonText: 'Voltar',
        });
    };

    return (
        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

                <div className="flex flex-col gap-4">

                    <NavTop></NavTop>

                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">
                        <HomeGestante></HomeGestante>
                        <MonitoramentoGestante></MonitoramentoGestante>
                        <ConteudosGestante></ConteudosGestante>
                        <GaleriaGestanteAtivo></GaleriaGestanteAtivo>
                        <PerfilGestante></PerfilGestante>
                    </ul>
                </div>

                <Logout></Logout>

            </nav>

            <main className="w-full h-full bg-gray-1 rounded 3xl">

                <DegradeBlue></DegradeBlue>

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
                                <div className="w-3/4 mx-auto mt-2 h-1 bg-[#F6F6F6] shadow-slate-200"></div>
                            </div>

                            <div className="mt-8 p-7 max-xl:p-2">
                                <h2 className="text-[25px] font-ABeeZee text-gray-4 text-left">Minha maternidade</h2>
                            </div>

                            <div id="Imagens" className="mt-2 h-[55vh] overflow-y-auto">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                    {fotos.map((foto, index) => (
                                        <div key={index} className="relative bg-blue-degrade-1 p-8 flex items-center justify-center max-xl:p-4">
                                            <Image
                                                src={foto.url}
                                                alt={`Foto ${index + 1}`}
                                                className="object-cover w-80 h-80 bg-[#E1EDF2] max-xl:w-44 max-xl:h-44"
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
