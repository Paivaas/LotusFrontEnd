"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/perfil.png";
import laranja from "@/public/icons/nav/nav-laranja.png";
import config from "@/public/icons/utilities/settings-white.svg";
import edit from "@/public/icons/utilities/edit-pencil-orange.svg";
import logout from "@/public/icons/nav/Ativo/logout.png";
import editprofissão from "@/public/icons/utilities/editprofissão.png";
import baby from "@/public/icons/profile-information/grey/baby.svg";
import calendar from "@/public/icons/profile-information/grey/calendar.svg";
import cake from "@/public/icons/profile-information/grey/cake.png";
import chat from "@/public/icons/nav/chat.svg";
import monitoramento from "@/public/icons/nav/monitoramento.svg";
import home from "@/public/icons/nav/home.svg"


const SettingsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                <h2 className="text-lg font-bold mb-4">Configurações</h2>
                <button onClick={onClose} className="mt-4 bg-pink-3 text-white p-2 rounded">
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default function Home() {
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState(""); // Novo estado para email
    const [password, setPassword] = useState(""); // Novo estado para senha
    const [userId, setUserId] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [yearsAsDoula, setYearsAsDoula] = useState("");
    const [description, setDescription] = useState(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    );
    const [specialization, setSpecialization] = useState([]);
    const [specializationOptions] = useState([
        "Consultoria em aleitamento materno",
        "Doula de parto",
        "Doula do luto",
        "Doula Cultural",
        "Doula de Aborto ou perda gestacional",
        "Doula de Adoção",
    ]);


    const handleIdSubmit = (e) => {
        e.preventDefault();
        fetchUserInfo(userId);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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

    const handleSpecializationChange = (option) => {
        if (selectedSpecializations.includes(option)) {
            setSelectedSpecializations(
                selectedSpecializations.filter((spec) => spec !== option)
            );
        } else {
            setSelectedSpecializations([...selectedSpecializations, option]);
        }
    };

    const handleSave = () => {
        setProfilePicture(selectedImage);
        setSpecialization(selectedSpecializations);
        toggleModal();
    };

    return (
        <div className="font-ABeeZee bg-white font-inter min-h-screen p-4 lg:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
            <div className="flex flex-col items-start w-full lg:w-1/5 fixed lg:static top-0 left-0 ">
                <div className="inline-flex items-center mb-4">
                    <Image src={logo} alt="logo" className="w-24 h-16" />
                    <h1 className="text-pink-3 text-lg font-medium ml-2 text-[24px]">Lotus</h1>
                </div>
    
                <button className="w-full text-left text-gray-3 hover:bg-orange-2 hover:text-orange-400 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={home} alt="Home" className="w-9 h-9 hover:text-orange-300" />
                        <h1 className="font-medium">Home</h1>
                    </div>
                </button>
    
                <button className="w-full text-left text-gray-3 hover:bg-orange-2 hover:text-orange-400 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={galeria} alt="Galeria" className="w-9 h-9 hover:text-orange-300" />
                        <h1 className="font-medium">Galeria</h1>
                    </div>
                </button>
    
                <button className="w-full text-left text-gray-3 hover:bg-orange-2 hover:text-orange-400 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={perfil} alt="Perfil" className="w-9 h-9 hover:text-orange-300" />
                        <h1 className="font-medium">Perfil</h1>
                    </div>
                </button>
    
                {/* Adicionando novas seções */}
                <button className="w-full text-left text-gray-3 hover:bg-orange-2 hover:text-orange-400 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={chat} alt="Chat" className="w-9 h-9 hover:text-orange-300" />
                        <h1 className="font-medium">Chat</h1>
                    </div>
                </button>
    
                <button className="w-full text-left text-gray-3 hover:bg-orange-2 hover:text-orange-400 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={monitoramento} alt="Monitoramento" className="w-9 h-9 hover:text-orange-300" />
                        <h1 className="font-medium">Monitoramento</h1>
                    </div>
                </button>
    
                <button className="w-full text-left text-gray-3 hover:bg-orange-2 hover:text-orange-400 rounded-[10px] transition duration-200 transform hover:scale-105">
                    <div className="flex items-center p-4 gap-2">
                        <Image src={conteudos} alt="Conteúdos" className="w-9 h-9 hover:text-orange-300" />
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
                    <Image src={laranja} alt="Nav Laranja" className="w-full h-32 lg:h-24" />
                    
                </div>

                <form onSubmit={handleIdSubmit} className="flex flex-col lg:flex-row items-center gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Insira o ID do usuário"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="border rounded p-2 w-full lg:w-auto"
                        required
                    />
                    <button type="submit" className="bg-pink-3 text-white rounded p-2 w-full lg:w-auto">
                        Buscar
                    </button>
                </form>

                <div className="flex flex-col items-center gap-4 relative md:h-48" style={{ marginTop: '-63px' }}>
                    <div className="relative">
                        <div className="bg-white h-48 w-48 lg:h-80 lg:w-80 rounded-full flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-40 w-40 lg:h-64 lg:w-64 rounded-full flex items-center justify-center bg-gray-1">
                                    {profilePicture ? (
                                        <img
                                            src={profilePicture}
                                            alt="Perfil"
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <span className="text-gray-400">Foto de Perfil</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-2">
                        <h1 className="text-[30px] md:text-[25px] text-gray-4 font-ABeeZee z-40 font-thin">
                            {userInfo ? userInfo.name : "Nome do Usuário"}
                        </h1>
                    </div>

                    {/* DIV DE OPÇÕES PRINCIPAIS DO PERFIL */}
                    {/* DIV DE OPÇÕES PRINCIPAIS DO PERFIL */}
<div className="bg-gray-100 w-[600px] h-auto flex flex-col justify-around items-start mt-8 mx-auto p-4 rounded-[13px]">

{/* Linha com Profissão e Data de Nascimento */}
<div className="flex gap-4 w-full mb-4"> {/* Adicionado mb-4 para espaçamento inferior */}

    {/* Profissão */}
    <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border w-2/3 h-12"> {/* Aumentado para h-14 */}
        <Image src={editprofissão} alt="Profissão" className="w-7 h-7" />
        <div className="flex flex-col">
            <span className="text-gray-400 font-ABeeZee">Profissão</span>
            <span className="text-gray-500">{userInfo?.profissao || ""}</span>
        </div>
    </div>

    {/* Data de Nascimento */}
    <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border  w-1/3 h-12"> {/* Aumentado para h-14 */}
        <Image src={cake} alt="Data de Nascimento" className="w-6 h-7" />
        <div className="flex flex-col">
            <span className="text-gray-500">{userInfo?.dataNascimento || ""}</span>
        </div>
    </div>

</div>

{/* Nome do Bebê */}
<div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border  w-full h-12 mb-4"> {/* Aumentado para h-14 e adicionado mb-4 */}
    <Image src={baby} alt="Nome do Bebê" className="w-7 h-7" />
    <div className="flex flex-col">
        <span className="text-gray-400 font-ABeeZee">Nome do seu Bebê</span>
        <span className="text-gray-500">{userInfo?.nomeBebe || ""}</span>
    </div>
</div>

{/* Data Prevista para o Parto */}
<div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border  w-full h-12"> {/* Aumentado para h-14 */}
    <Image src={calendar} alt="Data Prevista para o Parto" className="w-7 h-7" />
    <div className="flex flex-col">
        <span className="text-gray-400 font-ABeeZee">Data Prevista para o Parto</span>
        <span className="text-gray-500">{userInfo?.dataParto || ""}</span>
    </div>
</div>

</div>


                </div>


            </div>



        </div>
    );
}
