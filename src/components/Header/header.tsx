'use client'

import { InputSearch } from "../Inputs/input-search";
import { CartControl } from "../CartControl/cart-control";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
    const [displayText, setDisplayText] = useState("RaiseStore");

    useEffect( () => {
        function handleResize() {
            const smallScreen = window.innerWidth < 640;
            if (smallScreen){
                setDisplayText('RS');
            } else {
                setDisplayText('RaiseStore');
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize); //add um ouvinte de redimensionamento da janela
        return () => {
            window.removeEventListener('resize', handleResize); //remove o ouvinte
        }
    }, [])

    const router = useRouter();

    const handleNavigate = () => {
        router.push('/')
    }

    return (
        <div className="w-full flex items-center justify-center h-16 bg-white z-50">
            <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto absolutebg-white z-50">
                <span className="w-auto h-auto font-bold cursor-pointer" onClick={handleNavigate}>
                    {displayText}
                </span>
                <div className="flex gap-4 justify-center items-center">
                    <InputSearch placeholder= "Quick search..."/>
                    <CartControl/>
                </div>
            </header>
        </div>
    )
}