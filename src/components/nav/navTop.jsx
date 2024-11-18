
"use client";

import Image from "next/image";
import Icon from "@/public/icons/utilities/lotus-icon.svg"

export function NavTop() {

    return (
        <div className="flex items-center gap-2 text-pink-3">
            <Image className="w-[40px]" alt="Arrow Icon" src={Icon}></Image>
            <h1 className="font-ABeeZee">Lotus</h1>
        </div>
    )
}