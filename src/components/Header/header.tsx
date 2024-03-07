'use client'

// import Link from "next/link";
import { InputSearch } from "../Inputs/input-search";
import { CartControl } from "../CartControl/cart-control";
import { useEffect, useState } from "react";


export function Header() {


    const [displayText, setDisplayText] = useState("RaiseStore");
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    useEffect( () => {
        function handleResize() {

            const smallScreen = window.innerWidth < 640;

            if (smallScreen){
                setDisplayText('RaiseStore');
                setShowPlaceholder(false);
                
            } else {
                setDisplayText('RaiseStore');
                setShowPlaceholder(true);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize); //add um ouvinte de redimensionamento da janela
        return () => {
            window.removeEventListener('resize', handleResize); //remove o ouvinte
        }
    }, [])

    return (
        <div className="w-full flex items-center justify-center h-16 bg-white">
            <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
                <span className="w-auto h-auto font-bold">
                    {displayText}
                </span>

                <div className="flex gap-4 justify-center items-center">
                    <InputSearch placeholder={ showPlaceholder ? "Quick search..." : ''}/>
                    <CartControl/>
                </div>

            </header>
        </div>
    )
}