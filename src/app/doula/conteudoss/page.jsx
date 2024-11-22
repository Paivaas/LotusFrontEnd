import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/icons/utilities/lotus-icon.svg"
import LogoVerMais from "../../../public/icons/utilities/add-circle.svg"
import LogoLogout from "../../../public/icons/nav/logout.svg"

// Navegção
import LogoHome from "../../../public/icons/nav/home.svg"
import LogoMonitoramento from "../../../public/icons/nav/monitoramento.svg"
import LogoConteudo from "../../../public/icons/nav/conteudos.svg"
import LogoChat from "../../../public/icons/nav/chat.svg"
import LogoGaleria from "../../../public/icons/nav/galeria.svg"
import LogoPerfil from "../../../public/icons/nav/profile.svg"

import Card from "@/components/conteudos"


export default async function Home() {

  async function getContentAll() {

    const url = `https://lotus-back-end.onrender.com/v1/Lotus/conteudos/gestante`
    const response = await fetch(url)
    const data = await response.json()
    return data.conteudosDados

  }

  const conteudo = await getContentAll()

  return (
    <div className="flex h-screen">
      <header className="flex flex-col md:w-[20%] py-10 px-10">
        {/* lótus */}
        <div className="flex flex-row items-center gap-2 pb-16">
          <Image src={Logo} alt="logo" priority className="size-16"></Image>
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
        <div className="bg-gray-1 w-full h-full rounded-[40px] overflow-hidden flex flex-col">
          {/* degradê */}
          <div className="bg-pink-degrade-3 flex flex-row w-full h-20 justify-end rounded-tl-[40px] overflow-hidden">
            <div className="bg-pink-degrade-2 w-2/3 h-20 flex justify-end rounded-b-full">
              <div className="bg-pink-degrade-1 w-1/2 h-20 rounded-bl-full"></div>
            </div>
          </div>
          {/* título */}
          <div className="flex flex-col h-[10%] items-center justify-center gap-2">
            <h1 className="font-ABeeZee font-light text-gray-3 text-5xl">
              Conteúdos
            </h1>
            <div className="bg-gray-2 w-[70%] h-2 rounded-full"></div>
          </div>
          {/* cards */}
          <div className="h-[60%] flex flex-col justify-between gap-4 px-10 grow">
            {/* 1ª fileira de cards */}
            <div className="flex flex-col gap-2 h-full overflow-y-scroll overscroll-x-none p-4"
              style={{
                scrollbarWidth: 'none'
              }}
            >
              {/* cabeçalho */}
              {/* <div className="flex flex-row w-full h-20 items-center justify-between"> */}
              {/* subtítulo */}
              {/* <h1 className="font-ABeeZee font-medium text-3xl text-gray-3 ">
                  Amamentação
                </h1>
                <button>
                  <div className="flex flex-row items-center gap-2">
                    <Image src={LogoVerMais} alt="ver-mais" className="size-4"></Image>
                    <a className="font-Inter font-light text-base text-gray-3">Ver mais</a>
                  </div>
                </button>
              </div> */}
              {/* card */}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 h-full">

                {console.log(conteudo)}
                {conteudo.map((item) => {
                  return <Card imagem={item.foto_capa} titulo={item.titulo_conteudo} id={item.id_conteudos} key={item.id_conteudos} />
                })}
                

                {/* <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg aspect-video hover:scale-105 transition duration-200">
                  <div className="h-[80%] rounded-2xl bg-pink-300 ">
                    <div className="h-full w-full">
                      <Image></Image>          
                    </div>
                  </div> */}
                {/* título do card */}
                {/* <p className="font-Inter font-medium text-xl text-gray-3 p-4">
                    Desvendando a Amamentação
                  </p>
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}