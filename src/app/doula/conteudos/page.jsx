'use client'

import React, { useState } from 'react';
import Card from "@/components/doulaConteudo/conteudos"
// Import dos componentes do nav
import { PerfilDoula } from '@/components/nav/perfil';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradePink } from '@/components/degrade';
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoulaAtivo } from "@/components/nav/conteudos";
import AdicionarConteudo from "@/components/doulaConteudo/adicionarConteudo";

export default function Conteudos() {
    const [mostrarAdicionarConteudo, setMostrarAdicionarConteudo] = useState(false);

    async function getContentAll() {
        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante`;
        const response = await fetch(url);
        const data = await response.json();
        return data.conteudosDados;
    }

    const [conteudo, setConteudo] = useState([]);

    React.useEffect(() => {
        getContentAll().then(setConteudo);
    }, []);

    return (
        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">
                <div className="flex flex-col gap-4">
                    <NavTop />
                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row">
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
                    onClick={() => setMostrarAdicionarConteudo(!mostrarAdicionarConteudo)} // Alterna o estado
                >
                    <h1>Adicionar conteúdo</h1>
                </button>

                <div className="flex gap-2 h-full overflow-y-scroll overscroll-x-none p-4"
                    style={{
                        scrollbarWidth: 'none'
                    }}
                >
                    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 h-full">
                        {conteudo.map((item) => (
                            <Card
                                imagem={item.foto_capa}
                                titulo={item.titulo_conteudo}
                                id={item.id_conteudos}
                                key={item.id_conteudos}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center w-full h-[85vh] relative bottom-[100%]">
                    {mostrarAdicionarConteudo && <AdicionarConteudo />}
                </div>
            </main>
        </div>
    );
}
