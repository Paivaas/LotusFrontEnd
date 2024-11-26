'use client'

import Card from "@/components/conteudos"


export default async function Conteudos() {

    async function getContentAll() {

        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante`
        const response = await fetch(url)
        const data = await response.json()
        return data.conteudosDados

    }

    const conteudo = await getContentAll()

    return (
        <div className="flex flex-col gap-2 h-full overflow-y-scroll overscroll-x-none p-4"
            style={{
                scrollbarWidth: 'none'
            }}
        >

            <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 h-full">

                {console.log(conteudo)}
                {conteudo.map((item) => {
                    return <Card imagem={item.foto_capa} titulo={item.titulo_conteudo} id={item.id_conteudos} key={item.id_conteudos} />
                })}

            </div>
        </div>
    )
}