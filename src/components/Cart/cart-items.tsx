/* eslint-disable @next/next/no-img-element */
import { ProductInCart } from "@/types/products"
import { ChangeEvent } from "react"
import { DeleteIcon } from "../icons/delete-icon"

interface CartItemProps {
    product: ProductInCart,
    handleUpdateQuantity(id: string, quantity: number): void,
    handleDelete(id: string): void,
}
export function CartItem({ product, handleUpdateQuantity, handleDelete } : CartItemProps){

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value))
    }

    return(
        <li className="flex items-center justify-center h-80 rounded-lg bg-white relative mb-5">
            <button 
                className="absolute top-5 right-3" 
                onClick={() => handleDelete(product.id)}
                aria-label="Deletar"
            >
                <DeleteIcon />
            </button>
            <img 
                className="w-24 xl:w-52 max-h-64 rounded-tl-lg rounded-bl-lg p-5" 
                src={product.image} 
                alt={product.title}
            />
            <div className="px-10 flex flex-col gap-8">
                <h4 className="font-bold text-xl">{product.title}</h4>
                <p className="text-xs font-medium overflow-hidden text-ellipsis max-h-20">{product.description}</p>
                <div className="flex justify-between">
                    <select className="bg-slate-200 p-2 rounded-lg border border-black cursor-pointer" value={product.quantity} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <p className="font-bold">${product.price}</p>
                </div>
            </div>
        </li>
    )
}