/* eslint-disable @next/next/no-img-element */
import { ProductInCart } from "@/types/products"
import { DeleteIcon } from "../ui/icons/delete-icon"

interface CartItemProps {
    product: ProductInCart,
    handleUpdateQuantity(id: string, quantity: number): void,
    handleDelete(id: string): void,
}

// RENDERIZA OS CARDS DOS PRODUTOS NO CARRINHO
export function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps) {

    const handleDecrease = () => {
        const newQuantity = Math.max(product.quantity - 1, 1); // Garante que a quantidade nunca seja menor que 1
        handleUpdateQuantity(product.id, newQuantity);
    }

    const handleIncrease = () => {
        const newQuantity = product.quantity + 1;
        handleUpdateQuantity(product.id, newQuantity);
    }

    return (
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
                    <div className="flex gap-2 items-center">
                        <button className=" px-2 rounded-lg border border-black cursor-pointer" onClick={handleDecrease}>-</button>
                        <p className="font-bold">{product.quantity}</p>
                        <button className="px-2 rounded-lg border border-black cursor-pointer" onClick={handleIncrease}>+</button>
                    </div>
                    <p className="font-bold">${product.price}</p>
                </div>
            </div>
        </li>
    )
}
