"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/galeria.svg"
import IconAtivo from "@/public/icons/nav/Ativo/galeria2.svg"

export function GaleriaGestante() {

    const router = useRouter();
    const GaleriaGestante = () => {
        router.push('/gestante/galeria');
    }

    return (
        <button onClick={GaleriaGestante}>
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <li>Galeria</li>
            </div>
        </button>
    )

}

export function GaleriaGestanteAtivo() {

    const router = useRouter();
    const GaleriaGestante = () => {
        router.push('/gestante/galeria');
    }

    return (
        <button onClick={GaleriaGestante}>
            <div className=" animate-duration-[400ms] animate-fade-right animate-once flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer bg-blue-degrade-1">
                <Image className="w-[15px]" alt="Arrow Icon" src={IconAtivo}></Image>
                <li className="text-blue-degrade-3">Galeria</li>
            </div>
        </button>
    )

}