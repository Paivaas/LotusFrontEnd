
"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/logout.svg"

export function Logout() {

    const router = useRouter();
    const logout = () => {
        router.push('/');
    }

    return (

        <button  onClick={logout}>
            <div className="flex max-md:items-center gap-2 cursor-pointer bg-gray-1 rounded-2xl justify-center mt-4 hover:bg-white animate-jump animate-once animate-duration-[400ms] animate-ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <h1>Log out</h1>
            </div>
        </button>

    )

}

//className="max-xl:absolute bottom-0"
