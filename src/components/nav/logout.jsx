
"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/logout.svg"

export function Logout() {

    const router = useRouter();
    const logout = () => {
        router.push('/login');
    }

    return (

        <button onClick={logout}>
            <div className="flex max-md:items-center gap-2 cursor-pointer bg-gray-1 rounded-2xl justify-center mt-4">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <h1>Log out</h1>
            </div>
        </button>

    )

}
