"use client";
import React, { useEffect, useState } from "react";

//Import dos componentes do nav
import { PerfilDoula, PerfilDoulaAtivo } from '@/components/nav/perfil';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradeOrange } from '@/components/degrade';
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoula } from "@/components/nav/conteudos";

const BASE_URL = "https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula";

export default function Perfil() {

  const [doula, setDoula] = useState(null); // Estado para armazenar a doula
  const [formData, setFormData] = useState({
    nome_doula: "",
    sobrenome_doula: "",
    email_doula: "",
    senha_doula: "",
    cpf_doula: "",
    sobremim_doula: "",
    tempo_de_atuacao: "",
  });

  const [selectedImage, setSelectedImage] = useState(null); // Estado para armazenar a imagem selecionada

  // Função para obter a doula com id_usuario_doula === 3
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const doulaEncontrada = data.cadastro.find((d) => d.id_usuario_doula === 3);
        setDoula(doulaEncontrada); // Armazena a doula específica no estado
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
      .catch((error) => {
        console.error("Erro ao obter doulas", error);
      });
  }, []);

  // Função para atualizar uma doula
  const updateDoula = () => {
    if (!doula) return; // Se não houver doula, não faz nada

    const formToSend = new FormData();
    formToSend.append("nome_doula", formData.nome_doula);
    formToSend.append("sobrenome_doula", formData.sobrenome_doula);
    formToSend.append("email_doula", formData.email_doula);
    formToSend.append("senha_doula", formData.senha_doula);
    formToSend.append("cpf_doula", formData.cpf_doula);
    formToSend.append("sobremim_doula", formData.sobremim_doula);
    formToSend.append("tempo_de_atuacao", formData.tempo_de_atuacao);

    // Se houver uma nova foto, anexa no FormData
    if (selectedImage) {
      formToSend.append("foto_doula", selectedImage);
    }

    // Exemplo de headers caso a API precise de autenticação
    const headers = {
      "Content-Type": "multipart/form-data",
      // Se a API exigir um token de autenticação, descomente a linha abaixo
      // "Authorization": "Bearer YOUR_TOKEN",
    };

    fetch(`${BASE_URL}/${doula.id_usuario_doula}`, {
      method: "PUT",
      headers: headers, // Cabeçalhos para autenticação (se necessário)
      body: formToSend, // Envia o FormData com os dados da doula
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Doula atualizada com sucesso", data);
        setDoula((prevDoula) => ({
          ...prevDoula,
          ...formData, // Atualiza os dados da doula com as mudanças
          foto_doula: selectedImage ? URL.createObjectURL(selectedImage) : prevDoula.foto_doula, // Atualiza a imagem
        }));
      })
      .catch((error) => {
        console.error("Erro ao atualizar doula", error);
      });
  };

  // Função para lidar com mudanças no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com a seleção da imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Atualiza o estado com o novo arquivo
    }
  };

  // Função para fallback da imagem
  const handleImageError = (e) => {
    e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysHIDmzqCkdLOCk-b5BZeqNJyQHjYt7BucxT_NidPZCNn72FQ9S-6knpuz86ggey-ArY&usqp=CAU"; // Imagem de fallback
  };


  return (
    <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

      <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

        <div className="flex flex-col gap-4">

          <NavTop></NavTop>

          <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">

            <HomeDoula></HomeDoula>
            <ConteudosDoula></ConteudosDoula>
            <PerfilDoulaAtivo></PerfilDoulaAtivo>

          </ul>
        </div>

        <Logout></Logout>

      </nav>

      <main className="w-full h-full bg-gray-1 rounded-2xl">

        <DegradeOrange></DegradeOrange>

        <section className="w-full h-full flex">

          {/* Adicione o conteudo aqui */}




          <div className="w-full flex justify-center">

            {/* Se a doula foi encontrada, exibe seus dados */}
            {doula ? (
              <div className="flex flex-col items-center">

                <img
                  className="w-80 rounded-full relative bottom-8"
                  src={selectedImage ? URL.createObjectURL(selectedImage) : doula.foto_doula}
                  alt="Foto Doula"
                  onError={handleImageError} // Função chamada se a imagem falhar ao carregar
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






                <form
                className="bg-pink-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateDoula();
                  }}
                >
                  <div>
                    <label>Nome:</label>
                    <input
                      type="text"
                      name="nome_doula"
                      value={formData.nome_doula || doula.nome_doula}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Sobrenome:</label>
                    <input
                      type="text"
                      name="sobrenome_doula"
                      value={formData.sobrenome_doula || doula.sobrenome_doula}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email_doula"
                      value={formData.email_doula || doula.email_doula}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Senha:</label>
                    <input
                      type="password"
                      name="senha_doula"
                      value={formData.senha_doula || doula.senha_doula}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>CPF:</label>
                    <input
                      type="text"
                      name="cpf_doula"
                      value={formData.cpf_doula || doula.cpf_doula}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Sobre Mim:</label>
                    <textarea
                      name="sobremim_doula"
                      value={formData.sobremim_doula || doula.sobremim_doula}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Foto:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div>
                    <label>Tempo de Atuação:</label>
                    <input
                      type="text"
                      name="tempo_de_atuacao"
                      value={formData.tempo_de_atuacao || doula.tempo_de_atuacao}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit">Atualizar</button>
                </form>
              </div>
            ) : (
              <p>Carregando informações da doula...</p>
            )}
          </div>





        </section>

      </main>

    </div>
  );
}
