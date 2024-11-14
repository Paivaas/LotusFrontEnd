"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/profile.svg"
import IconAtivo from "@/public/icons/nav/Ativo/profile.svg"

export function PerfilGestante() {

    const router = useRouter();
    const PerfilGestante = () => {
        router.push('/gestante/perfil');
    }

    return (
        <button onClick={PerfilGestante}>
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <li>Perfil</li>
            </div>
        </button>
    )

}

export function PerfilGestanteAtivo() {

    const router = useRouter();
    const PerfilGestante = () => {
        router.push('/gestante/perfil');
    }

    return (
        <button onClick={PerfilGestante}>
            <div className="flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer bg-orange-degrade-3">
                <Image className="w-[15px]" alt="Arrow Icon" src={IconAtivo}></Image>
                <li className="text-orange-degrade-1">Perfil</li>
            </div>
        </button>
    )

}

export function PerfilDoula() {

    const router = useRouter();
    const PerfilDoula = () => {
        router.push('/doula/perfil');
    }

    return (
        <button onClick={PerfilDoula}>
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <li>Perfil</li>
            </div>
        </button>
    )

}

export function PerfilDoulaAtivo() {

    const router = useRouter();
    const PerfilDoula = () => {
        router.push('/doula/perfil');
    }

    return (
        <button onClick={PerfilDoula}>
            <div className="flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer bg-orange-degrade-3">
                <Image className="w-[15px]" alt="Arrow Icon" src={IconAtivo}></Image>
                <li className="text-orange-degrade-1">Perfil</li>
            </div>
        </button>
    )

}