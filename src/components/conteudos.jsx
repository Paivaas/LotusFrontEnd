'use client'

import { Jersey_10 } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card({ titulo, imagem, id }) {

    const router = useRouter()

    const handleClick = () => {
        router.push('/conteudos/conteudo/' + id)
    }

    return (
        <div>
            <button onClick={handleClick} className="flex flex-col items-center justify-center h-56 w-full bg-white rounded-2xl shadow-lg hover:scale-105 transition duration-200">
                <div className="h-3/5 w-full rounded-2xl bg-pink-300">
                    <div className="h-full w-full bg-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${imagem})` }}></div>
                </div>
                {/* título do card */}
                <p className="font-Inter font-medium text-xl grow flex items-center justify-center text-center text-gray-3 p-4">
                    {titulo}
                </p>
            </button>
        </div>

    )
}