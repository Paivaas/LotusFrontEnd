'use client'

import { Jersey_10 } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ConteudoID ({imagem, titulo, data, texto}) {
    console.log(imagem);
    
   return(

    <div className="flex flex-col h-full">
        {/* imagem */}
        <div className="w-full h-1/3 rounded-b-[40px] bg-pink-3 bg-cover bg-no-repeat bg-center shrink-0"  style={{backgroundImage: `url(${imagem})`}}></div>
        {/* título e data */}
        <div className="pt-10 px-20 flex flex-col gap-2">
            <h1 className="font-inter font-normal text-gray-4 text-3xl">
                {titulo}
            </h1>
            <p className="font-inter font-normal text-gray-3 text-xl">
                {data}
            </p>
        </div>
        <div className="mt-10 px-20 flex flex-col gap-6 overflow-y-scroll">
            <p className="font-inter font-normal text-gray-3 text-xl text-justify">
                {texto}
            </p>
        </div>

    </div>
   )
}




