"use client";
import React, { useEffect, useState } from "react";

//Import dos componentes do nav
import { PerfilDoula, PerfilDoulaAtivo } from '@/components/nav/perfil';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradeOrange } from '@/components/degrade';
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoula } from "@/components/nav/conteudos";


export default function Perfil() {

  const [doulas, setDoulas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fazendo a requisição para o endpoint da API
  useEffect(() => {
    fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => {
        setDoulas(data.cadastro); // Setando os dados das doulas
        setLoading(false); // Finalizando o estado de carregamento
      })
      .catch(error => {
        console.error('Erro ao buscar dados', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

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

          <div>
      <h1>Lista de Doulas</h1>
      <ul>
        {doulas.map(doula => (
          <li key={doula.id_usuario_doula}>
            <img src={doula.foto_doula} alt={`${doula.nome_doula} ${doula.sobrenome_doula}`} width="100" height="100" />
            <h2>{doula.nome_doula} {doula.sobrenome_doula}</h2>
            <p>Email: {doula.email_doula}</p>
            <p>Tempo de Atuação: {doula.tempo_de_atuacao}</p>
            <p>Sobre Mim: {doula.sobremim_doula}</p>
          </li>
        ))}
      </ul>
    </div>



        </section>

      </main>

    </div>
  );
}
