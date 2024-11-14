import { Jersey_10 } from "next/font/google";
import Image from "next/image";

export default function Flor ({imagem}) {

    return(
        // quadro
        <div className="flex items-center justify-center">
            <div className="h-[440px] w-[440px] bg-white rounded-xl border-4 border-pink-3 flex items-center justify-center">
                <div className="size-1/2"  style={{backgroundImage: `url(${imagem})`}}></div>
            </div>
        </div>       
  )
}