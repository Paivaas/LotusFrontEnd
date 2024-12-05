'use client'

import Card from "@/components/doulaConteudo/conteudos"
//Import dos componentes do nav
import { PerfilDoula, PerfilDoulaAtivo } from '@/components/nav/perfil';
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import { DegradePink } from '@/components/degrade';
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoula, ConteudosDoulaAtivo } from "@/components/nav/conteudos";

export default async function Conteudos() {

    async function getContentAll() {

        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante`
        const response = await fetch(url)
        const data = await response.json()
        return data.conteudosDados

    }

    const conteudo = await getContentAll()

    return (

        <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

                <div className="flex flex-col gap-4">

                    <NavTop></NavTop>

                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">

                        <HomeDoula></HomeDoula>
                        <ConteudosDoulaAtivo></ConteudosDoulaAtivo>
                        <PerfilDoula></PerfilDoula>

                    </ul>
                </div>

                <Logout></Logout>

            </nav>

            <main className="w-full h-full bg-gray-1 rounded-2xl">

                <DegradePink></DegradePink>

                <div className="flex gap-2 h-full overflow-y-scroll overscroll-x-none p-4"
                    style={{
                        scrollbarWidth: 'none'
                    }}
                >

                    <div className=" w-full grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 h-full">

                        {console.log(conteudo)}
                        {conteudo.map((item) => {
                            return <Card imagem={item.foto_capa} titulo={item.titulo_conteudo} id={item.id_conteudos} key={item.id_conteudos} />
                        })}

                    </div>
                </div>

            </main>

        </div>

    )
}