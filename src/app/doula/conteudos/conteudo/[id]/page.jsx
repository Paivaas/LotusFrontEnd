'use client'

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/icons/utilities/lotus-icon.svg";
import LogoLogout from "@/public/icons/nav/logout.svg";

// Navegação
import { PerfilDoula, PerfilDoulaAtivo } from "@/components/nav/perfil";
import { Logout } from "@/components/nav/logout";
import { NavTop } from "@/components/nav/navTop";
import { DegradePink } from "@/components/degrade";
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoula, ConteudosDoulaAtivo } from "@/components/nav/conteudos";
import ComentariosDoula from "@/components/comentario/comentarioDoula";

// Componente
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ConteudoID from "@/components/ConteudoID";

export default function Home() {
  const [dados, setDados] = useState();
  const [mostrarComentarios, setMostrarComentarios] = useState(true); // Estado inicializado como true
  const params = useParams();

  async function getContentID(id) {
    const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudo/gestante/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.conteudo;
  }

  useEffect(() => {
    getDados(params.id);
  }, [params]);

  const getDados = async (id) => {
    const dado = await getContentID(id);
    if (dado) {
      console.log(dado);
      setDados(dado);
    }
  };

  return (
    <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">
      <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">
        <div className="flex flex-col gap-4">
          <NavTop />
          <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8">
            <HomeDoula />
            <ConteudosDoulaAtivo />
            <PerfilDoula />
          </ul>
        </div>
        <Logout />
      </nav>

      <main className="w-full h-full bg-gray-1 rounded-2xl">
        <DegradePink />

        <button
          className="bg-white font-ABeeZee text-gray-3 cursor-pointer hover:bg-slate-100 px-4 py-2 rounded-xl ml-6 absolute top-12"
          onClick={() => setMostrarComentarios(!mostrarComentarios)} // Alterna o estado
        >
          <h1>Comentários</h1>
        </button>

        <div className="bg-gray-1 w-full h-full rounded-[40px] overflow-hidden">
          {/* Card Conteudo */}
          {dados && (
            <ConteudoID
              imagem={dados[0].foto_capa}
              titulo={dados[0].titulo_conteudo}
              data={dados[0].data_conteudo}
              texto={dados[0].conteudo}
            />
          )}
        </div>

        <div className=" w-1/3 h-[85vh] relative bottom-[100%] left-[67%]">
          {/* Renderiza ComentariosDoula se o estado for true */}
          {mostrarComentarios && <ComentariosDoula />}
        </div>
      </main>
    </div>
  );
}
