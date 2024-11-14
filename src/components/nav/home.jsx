"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/galeria.svg"
import IconAtivo from "@/public/icons/nav/Ativo/galeria.svg"

export function HomeGestante() {

    const router = useRouter();
    const HomeGestante = () => {
        router.push('/gestante/galeria');
    }

    return (
        <button onClick={HomeGestante}>
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <li>Home</li>
            </div>
        </button>
    )

}

export function HomeGestanteAtivo() {

    const router = useRouter();
    const HomeGestante = () => {
        router.push('/gestante/homepage');
    }

    return (
        <button onClick={HomeGestante}>
            <div className="flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer bg-blue-degrade-3">
                <Image className="w-[15px]" alt="Arrow Icon" src={IconAtivo}></Image>
                <li className="text-blue-degrade-1">Home</li>
            </div>
        </button>
    )

}