// 'use client'

// import { useLocalStorage } from "@/hooks/useLocalStorage";
// import { CartIcon } from "../icons/cart-icon";
// import { useRouter } from "next/navigation";


// export function CartControl(){

//     const { value } = useLocalStorage('cart-items', []);

//     const router = useRouter();

//     const handleNavigate = () => {
//         router.push('/cart')
//     }



//     return (
//         <div className="relative flex cursor-pointer" onClick={handleNavigate}>
//             <CartIcon/>
//             {value.length === 0 ? '' :
//                 <span className="absolute top-1/2 left-1/2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">{value.length}
//                 </span>
//             }
//         </div>
        
//     )
// }

import { useEffect, useState, useContext } from "react";
import { CartIcon } from "../icons/cart-icon";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function CartControl() {
    const { value } = useLocalStorage('cart-items', []);
    const router = useRouter();

    const [cartItemsCount, setCartItemsCount] = useState(value.length);

    const handleNavigate = () => {
        router.push('/cart');
    }

    useEffect(() => {
        setCartItemsCount(value.length);
    }, [value]);

    return (
        <div className="relative flex cursor-pointer" onClick={handleNavigate}>
            <CartIcon />
            {cartItemsCount> 0 &&
                <span className="absolute top-1/2 left-1/2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                    {cartItemsCount}
                </span>
            }
        </div>
    );
}
