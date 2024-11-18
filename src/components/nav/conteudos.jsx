"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/conteudos.svg"
import IconAtivo from "@/public/icons/nav/Ativo/conteudos.svg"

export function ConteudosGestante() {

    const router = useRouter();
    const ConteudosGestante = () => {
        router.push('/gestante/conteudos');
    }

    return (
        <button onClick={ConteudosGestante}>
            <div className=" flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <li>Conteúdos</li>
            </div>
        </button>
    )

}

export function ConteudosGestanteAtivo() {

    const router = useRouter();
    const ConteudosGestante = () => {
        router.push('/gestante/conteudos');
    }

    return (
        <button onClick={ConteudosGestante}>
            <div className="animate-duration-[400ms] animate-fade-right animate-once flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer bg-pink-degrade-1">
                <Image className="w-[15px]" alt="Arrow Icon" src={IconAtivo}></Image>
                <li className="text-pink-degrade-3">Conteúdos</li>
            </div>
        </button>
    )

}


export function ConteudosDoula() {

    const router = useRouter();
    const ConteudosDoula = () => {
        router.push('/doula/conteudos');
    }

    return (
        <button onClick={ConteudosDoula}>
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <li>Conteúdos</li>
            </div>
        </button>
    )

}

export function ConteudosDoulaAtivo() {

    const router = useRouter();
    const ConteudosDoula = () => {
        router.push('/doula/conteudos');
    }

    return (
        <button onClick={ConteudosDoula}>
            <div className="flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer bg-pink-degrade-1">
                <Image className="w-[15px]" alt="Arrow Icon" src={IconAtivo}></Image>
                <li className="text-pink-degrade-3">Conteúdos</li>
            </div>
        </button>
    )

}