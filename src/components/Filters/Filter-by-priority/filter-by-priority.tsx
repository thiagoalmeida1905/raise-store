'use client';

import { useState } from "react";
import { ArrowIcon } from "../../ui/icons/arrow-icon";
import { PriorityTypes } from "@/types/priority-types";
import useStore from "@/context/filterContext";


export function FilterByPriority(){
    const { priority, setPriority } = useStore();
    const [isOpen, setIsOpen] = useState(false);

    //se tiver fechado > abre | e vice-versa
    const handleOpen = () => setIsOpen(prev => !prev);

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(true);
    }

    return(
        <div className="flex items-center relative">
            <button 
                className="font-normal flex items-center gap-2 py-2 px-4 rounded-3xl text-xs cursor-pointer border"
                onClick={handleOpen}
            >
                Organizar por
                <ArrowIcon/>
                {isOpen && (
                    <ul 
                    className="absolute shadow-md rounded-sm py-3 w-44 right-1 top-full text-sm bg-zinc-200 px-2">
                        <li 
                            className="mb-2 cursor-pointer" 
                            onClick={() => handleUpdatePriority(PriorityTypes.Biggest_price)}>Preço: Maior - Menor
                        </li>
                        <li 
                            className="cursor-pointer" 
                            onClick={() => handleUpdatePriority(PriorityTypes.Minor_price)}>Preço: Menor - Maior
                        </li>
                    </ul>
                )}
            </button>
        </div>
        
    )
}