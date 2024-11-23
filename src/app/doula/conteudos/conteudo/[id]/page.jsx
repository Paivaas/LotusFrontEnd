import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/icons/utilities/lotus-icon.svg"
import LogoLogout from "@/public/icons/nav/logout.svg"

// Navegção
import LogoHome from "@/public/icons/nav/home.svg"
import LogoMonitoramento from "@/public/icons/nav/monitoramento.svg"
import LogoConteudo from "@/public/icons/nav/conteudos.svg"
import LogoChat from "@/public/icons/nav/chat.svg"
import LogoGaleria from "@/public/icons/nav/galeria.svg"
import LogoPerfil from "@/public/icons/nav/profile.svg"

// Componente
import Conteudo from "@/components/conteudos";
// preciso da função de id

export default async function Home() {

    async function getContentAll() {

        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante`
        const response = await fetch(url)
        const data = await response.json()
        return data.conteudosDados

    }

    async function getContentID(id) {

        const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudo/gestante/${id}`
        const response = await fetch(url)
        const data = await response.json()
        return data.conteudosDados

    }

    const conteudo = await getContentAll()
    const id = await getContentID()

    return (
        <div className="flex h-screen">
            <header className="flex flex-col md:w-[20%] py-10 px-10">
                {/* lótus */}
                <div className="flex flex-row items-center gap-2 pb-16">
                    <Image src={Logo} alt="logo" className="size-16"></Image>
                    <h1 className="font-ABeeZee text-pink-3 font-light text-3xl text-center">
                        Lótus
                    </h1>
                </div>
                {/* navegação */}
                <nav className="flex flex-col gap-10 h-[80%]">
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoHome} alt="home" className="fill-current group-hover:text-white size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Home
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoMonitoramento} alt="monitoramento" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Monitoramento
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoConteudo} alt="conteudo" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Conteúdo
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoChat} alt="chat" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Chat
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoGaleria} alt="galeria" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Galeria
                        </h1>
                    </a>
                    <a href="#" className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 transition duration-200 rounded-xl group">
                        <Image src={LogoPerfil} alt="perfil" className="size-8" ></Image>
                        <h1 className="font-Inter font-normal text-gray-3 text-lg group-hover:text-white">
                            Perfil
                        </h1>
                    </a>
                </nav>
                {/* botão sair */}
                <button className="flex flex-row gap-2 items-center">
                    <Image src={LogoLogout} alt="logout" className="size-8"></Image>
                    <p className="font-Inter font-normal text-gray-3 text-lg hover:text-pink-degrade-3">
                        Log out
                    </p>
                </button>
            </header>
            <main className="w-[80%] bg-white p-10">
                {/* conteúdo */}
                <div className="bg-gray-1 w-full h-full rounded-[40px] overflow-hidden">
                    {/* degradê */}
                    <div className="bg-pink-degrade-3 flex flex-row w-full h-20 justify-end rounded-tl-[40px] overflow-hidden">
                        <div className="bg-pink-degrade-2 w-2/3 h-20 flex justify-end rounded-b-full">
                            <div className="bg-pink-degrade-1 w-1/2 h-20 rounded-bl-full"></div>
                        </div>
                    </div>
                    {/* Card Conteudo */}
                    {console.log(conteudo)}
                    {conteudo.map((item)=>{
                    return <Conteudo usuario="doula" imagem={item.foto_capa} titulo={item.titulo_conteudo} data={item.data_conteudo} texto={item.conteudo} key={item.id_conteudo} />
                    })}

                    {/* imagem */}
                    {/* <div className="w-full h-[26%] rounded-b-[40px] bg-pink-400">
                        <Image></Image>
                    </div> */}
                    {/* título e data */}
                    {/* <div className="pt-10 px-20 flex flex-col gap-2">
                        <h1 className="font-inter font-normal text-gray-4 text-3xl">
                            Desvendando a Amamentação
                        </h1>
                        <p className="font-inter font-normal text-gray-3 text-xl">
                            Atualizado: 20 de out. de 2022
                        </p>
                    </div> */}
                    {/* texto e autor */}
                    {/* <div className="pt-10 px-20 flex flex-col gap-6">
                        <p className="font-inter font-normal text-gray-3 text-xl text-justify">
                            O roteiro de ouro deve ser: parto normal, bebê no peito, amamentação na primeira hora de vida, livre demanda daí em diante, aleitamento materno exclusivo até os seis meses, e, segundo a Organização Mundial da Saúde, manutenção da amamentação até os dois anos ou mais.
                            Assim como no parto, eu queria o melhor, racionalmente o melhor, ou seja, aleitamento materno exclusivo. E se existem mil perfis na internet, cursos, livros para os diversos assuntos ligados ao universo da parentalidade, aqui ainda existem profissões e ramificações de profissões (as consultoras em amamentação) destinadas a ajudar no roteiro que seria tão natural. O que mostra que não é tão natural assim. Aliás, já não somos naturais há um bom tempo. É claro que o instinto fica mais presente ao sermos tão mamíferos quanto no ato de dar de mamar, mas, eu ouvi mais relatos de pessoas com dificuldades do que aqueles em que tudo correu simplesmente 100%, beleza pura, mamão com açúcar.
                            O roteiro de ouro deve ser: parto normal, bebê no peito, amamentação na primeira hora de vida, livre demanda daí em diante, aleitamento materno exclusivo até os seis meses, e, segundo a Organização Mundial da Saúde, manutenção da amamentação até os dois anos ou mais.
                        </p>
                        <div className="flex flex-row gap-2">
                            <p className="font-inter font-semibold text-gray-4 text-base">
                                Publicado por:
                            </p>
                            <p className="font-inter font-semibold text-gray-4 text-base">
                                Vitoria Castro 
                            </p>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    )
}