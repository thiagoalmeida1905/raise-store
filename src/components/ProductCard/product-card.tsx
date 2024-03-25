/* eslint-disable @next/next/no-img-element */
import { useProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string,

}

export function ProductCard(props: ProductCardProps) {

    const router = useRouter();
    const { product, loading } = useProduct({ productId: props.id })

    const handleNavigate = () => {
        router.push("/product?id=" + props.id)
    }

    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items')
        if (cartItems) { // se tiver algum item nocarrinho...
            let cartItemsArray = JSON.parse(cartItems);

            let existingProductIndex = cartItemsArray.findIndex((item: { id: string }) => item.id === props.id);

            if (existingProductIndex != -1) {
                cartItemsArray[existingProductIndex].quantity += 1;
            } else {
                cartItemsArray.push({ ...product, quantity: 1, id: props.id })
                localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
            }

        } else {// se não tiver itens no carrinho
            const newCart = [
                {
                    ...product,
                    id: props.id,
                    quantity: 1
                }
            ]
            localStorage.setItem('cart-items', JSON.stringify(newCart))
        }
        alert('Item adicionado ao carrinho')
        window.location.reload()
    }

    return (
        <div
            className="flex items-center justify-center flex-col w-80 h-96 rounded-xl gap-5 border pt-5 px-2 cursor-pointer"

        >
            <div onClick={handleNavigate}>
                <img
                    className="h-40 max-w-full rounded-lg"
                    src={props.image}
                    alt={props.title}
                />
            </div>
            <div 
                className="bg-white w-full flex flex-col gap-4 items-center"
                onClick={handleNavigate}
            >
                <h3 className="text-sm font-semibold mt-4">{props.title}</h3>
                <p className="font-bold text-sm">${props.price}</p>
            </div>

            <div className="flex items-center w-full gap-5 mb-3">
                <button className="w-full border p-2 rounded-3xl font-semibold" onClick={handleAddToCart}>Add to cart</button>
                <button className="w-full border bg-black text-white p-2 rounded-3xl font-semibold">Buy Now</button>
            </div>
        </div>
    )
}