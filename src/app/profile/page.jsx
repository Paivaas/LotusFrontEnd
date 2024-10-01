"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";
import conteudos from "@/public/icons/nav/conteudos.svg";
import galeria from "@/public/icons/nav/galeria.svg";
import perfil from "@/public/icons/nav/Ativo/profile.svg";
import laranja from "@/public/icons/nav/nav-laranja.png";
import config from "@/public/icons/utilities/settings-white.svg";
import edit from "@/public/icons/utilities/edit-pencil-orange.svg";
import verif from "@/public/icons/profile-information/verificado.png";
import logout from "@/public/icons/nav/Ativo/logout.png";
import arrow from "@/public/icons/utilities/arrow-pink.svg";
import book from "@/public/icons/utilities/book-pink.svg";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cpf, setCpf] = useState("");
  const [dob, setDob] = useState("");
  const [yearsAsDoula, setYearsAsDoula] = useState("");
  const [description, setDescription] = useState(""); // Novo estado para descrição
  const [specialization, setSpecialization] = useState(""); // Novo estado para especialidade

  const fetchUserInfo = async (id) => {
    const userData = {
      name: "Vitória Castro",
      specialization: [
        "Consultoria em aleitamento materno",
        "Doula de parto",
        "Doula do luto",
      ],
      profilePicture: null,
    };
    setUserInfo(userData);
  };

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

  const handleSaveProfilePicture = () => {
    setProfilePicture(selectedImage);
    toggleModal();
  };

  // Novo handler para salvar as informações do modal
  const handleSave = () => {
    setProfilePicture(selectedImage);
    toggleModal();
  };

  return (
    <div className="font-ABeeZee bg-white font-inter min-h-screen p-4 lg:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
      <div className="flex flex-col items-start w-full lg:w-1/5 fixed lg:static top-0 left-0 ">
        <div className="inline-flex items-center mb-4">
          <Image src={logo} alt="logo" className="w-24 h-16" />
          <h1 className="text-pink-3 text-lg font-medium ml-2">Lotus</h1>
        </div>

        <button className="w-full text-left text-gray-3">
          <div className="flex items-center p-4 gap-2">
            <Image src={conteudos} alt="Conteúdos" className="w-9 h-11" />
            <h1 className="text-gray-3 font-medium">Conteúdos</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={galeria} alt="Galeria" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Galeria</h1>
          </div>
        </button>

        <button className="w-full text-left">
          <div className="flex items-center p-4 gap-2">
            <Image src={perfil} alt="Perfil" className="w-9 h-16" />
            <h1 className="text-gray-3 font-medium">Perfil</h1>
          </div>
        </button>

        <button className="absolute bottom-8 left-4">
          <div className="flex items-center">
            <Image src={logout} alt="Logout" />
          </div>
        </button>
      </div>

      <div className="bg-gray-1 flex-grow min-h-screen lg:w-[6000px] rounded-3xl lg:ml-[20%] p-4 lg:p-8 relative">
        <div className="absolute top-0 left-0 w-full">
          <Image src={laranja} alt="Nav Laranja" className="w-full h-32 lg:h-24" />

          <button>
            <Image
              src={config}
              alt="Configurações"
              className="absolute right-16 top-2 w-9 h-16"
            />
          </button>

          <button onClick={toggleModal}>
            <Image
              src={edit}
              alt="Editar"
              className="absolute right-4 top-2 w-9 h-16 rounded-full"
            />
          </button>
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

        <div className="flex flex-col lg:flex-row items-center gap-4 relative md:h-48">
          <div className="relative">
            <div className="bg-white h-60 w-60 opacity-100 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full flex items-center justify-center bg-gray-1">
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

          <div className="flex flex-col gap-2 mt-10 text-center lg:text-left md:text-[20px]">
            <div className="flex gap-5 items-center justify-center lg:justify-start md:text-[6]">
              <h1 className="text-[25px] md:text-[25px] text-gray-4 font-ABeeZee z-40 font-thin">
                {userInfo ? userInfo.name : "Nome do Usuário"}
              </h1>
              <Image src={verif} alt="verificado doula" className="size-9 content-center md:size-6 " />
            </div>

            {/* ESPECIALIZAÇÃO */}
            <div>
              <h1 className="text-[15px] text-gray-3 font-medium">Especialização em:</h1>
              <div className="flex flex-wrap gap-4 mt-4 text-gray-4 justify-center lg:justify-start">
                {userInfo && userInfo.specialization ? (
                  userInfo.specialization.map((spec, index) => (
                    <div key={index} className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center">
                      <span>{spec}</span>
                    </div>
                  ))
                ) : (
                  <div className="bg-white shadow-md rounded-full p-4 h-12 flex items-center justify-center md:h-4">
                    <span className="md:text-[12px]">especialização 1</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIÇÃO E TEMPO DE SERVIÇO */}
        <div className="flex flex-col lg:flex-row mt-20">
          <div className="flex-1 mb-8 lg:mb-0">
            <h1 className="text-gray-3 text-[23px] font-ABeeZee md:text-[15px]">{yearsAsDoula || "Doula a 5 anos"}</h1>
            <h1 className="text-xl text-gray-4 break-words max-w-xl mt-4 md:text-[15px]">
              {description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
            </h1>
          </div>

          <div className="flex-1">
            <h1 className="text-gray-3 text-[23px] font-ABeeZee
            md:text-[15px]">{dob || "Data de Nascimento"}</h1>
            <h1 className="text-xl text-gray-4 break-words max-w-xl mt-4 md:text-[15px]">
              {cpf || "CPF não disponível"}
            </h1>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4">Editar Informações</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div className="mb-4">
                  <label className="block text-gray-700">Descrição:</label>
                  <textarea
                    className="border rounded p-2 w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Especialização:</label>
                  <input
                    type="text"
                    className="border rounded p-2 w-full"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-red-500 text-white rounded px-4 py-2"
                    onClick={toggleModal}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white rounded px-4 py-2"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
