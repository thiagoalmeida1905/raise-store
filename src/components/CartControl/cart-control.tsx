'use client'

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../icons/cart-icon";


export function CartControl(){

    const { value } = useLocalStorage('cart-items', []);

    return (
        <div className="relative flex ">
            <CartIcon/>
            {value.length && 
                <span className="absolute top-1/2 left-1/2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">{value.length}
                </span>
            }
        </div>
        
    )
}
