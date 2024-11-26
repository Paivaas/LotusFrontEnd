"use client"

import { Jersey_10 } from "next/font/google";
import Image from "next/image";

export default function Card({ titulo, imagem, id, onClick }) {

    return (
        <div className="h-9 w-[500px] bg-white rounded-2xl shadow-lg aspect-video hover:scale-105 transition duration-200">
            <div className="h-[80%] w-[500px] rounded-2xl bg-pink-3">
                <div className="h-full w-full bg-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${imagem})` }}></div>
            </div>
            {/* título do card */}
            <p className="font-Inter bg-zinc-950 font-medium text-xl text-gray-3 p-4">
                {titulo}
            </p>
        </div>
    )
}
// id_conteudos 