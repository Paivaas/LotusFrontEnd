"use client";
import React, { useEffect, useState } from "react";

// Import dos componentes do nav
import { PerfilDoulaAtivo } from "@/components/nav/perfil";
import { Logout } from "@/components/nav/logout";
import { NavTop } from "@/components/nav/navTop";
import { DegradeOrange } from "@/components/degrade";
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoula } from "@/components/nav/conteudos";
import Loading from "@/components/loading"; // Certifique-se de importar corretamente

const BASE_URL = "https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula";

export default function Perfil() {
  const [doula, setDoula] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
  const [formData, setFormData] = useState({
    nome_doula: "",
    sobrenome_doula: "",
    email_doula: "",
    senha_doula: "",
    cpf_doula: "",
    sobremim_doula: "",
    tempo_de_atuacao: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const doulaEncontrada = data.cadastro.find((d) => d.id_usuario_doula === 3);
        setDoula(doulaEncontrada);
        setFormData({
          nome_doula: doulaEncontrada.nome_doula,
          sobrenome_doula: doulaEncontrada.sobrenome_doula,
          email_doula: doulaEncontrada.email_doula,
          senha_doula: doulaEncontrada.senha_doula,
          cpf_doula: doulaEncontrada.cpf_doula,
          sobremim_doula: doulaEncontrada.sobremim_doula,
          tempo_de_atuacao: doulaEncontrada.tempo_de_atuacao,
        });
      })
      .catch((error) => console.error("Erro ao obter doulas", error))
      .finally(() => setIsLoading(false)); // Define isLoading como falso
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysHIDmzqCkdLOCk-b5BZeqNJyQHjYt7BucxT_NidPZCNn72FQ9S-6knpuz86ggey-ArY&usqp=CAU";
  };

  return (
    <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">
      <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">
        <div className="flex flex-col gap-4">
          <NavTop />
          <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8">
            <HomeDoula />
            <ConteudosDoula />
            <PerfilDoulaAtivo />
          </ul>
        </div>
        <Logout />
      </nav>
      <main className="w-full h-full bg-gray-1 rounded-2xl">
        <DegradeOrange />
        <section className="w-full h-full flex justify-center items-center">
          {isLoading ? (
            <Loading /> // Mostra o componente de loading enquanto os dados estão sendo carregados
          ) : doula ? (
            <div className="flex flex-col items-center">
              <img
                className="w-80 rounded-full relative bottom-8"
                src={selectedImage ? URL.createObjectURL(selectedImage) : doula.foto_doula}
                alt="Foto Doula"
                onError={handleImageError}
              />
              <h2 className="font-ABeeZee text-3xl text-gray-4">
                Perfil de {doula.nome_doula} {doula.sobrenome_doula}
              </h2>
              
              <div className="flex gap-4 bg-gray-2 rounded-xl p-4 border-2 border-gray-3 mt-4">

              <p>
                <strong>Email:</strong> {doula.email_doula}
              </p>

              <p>
                <strong>Tempo de Atuação:</strong> {doula.tempo_de_atuacao}
              </p>


            </div>



            <p>
              {doula.sobremim_doula}
            </p>

            </div>
          ) : (
            <p>Erro ao carregar as informações da doula.</p>
          )}
        </section>
      </main>
    </div>
  );
}
