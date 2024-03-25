/* eslint-disable @next/next/no-img-element */
'use client';

import { BackButton } from "@/components/BackButton/back-button";
import { Container } from "@/components/Container";
import { CartIcon } from "@/components/icons/cart-icon";
import { useProduct } from "@/hooks/useProducts";

interface ProductPageProps{
    searchParams: { id: string};
}

export default function ProductPage ({searchParams}: { searchParams: {id: string}}) {
    
    const { id } = searchParams;
    const { product, loading} = useProduct({ productId: id })

    if (!product) {
        return <div>Carregando produto</div>
    }

    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items')
        if(cartItems) { // se tiver algum item nocarrinho...
            let cartItemsArray = JSON.parse(cartItems);

            let existingProductIndex = cartItemsArray.findIndex((item: { id: string }) => item.id === searchParams.id);

            if (existingProductIndex != -1) {
                cartItemsArray[existingProductIndex].quantity += 1;
            } else {
                cartItemsArray.push({...product, quantity: 1, id: searchParams.id} )
                localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
            }

        } else {// se não tiver itens no carrinho
            const newCart = [
                {
                    ...product,
                    id: searchParams.id,
                    quantity: 1
                }
            ]
            localStorage.setItem('cart-items', JSON.stringify(newCart))
        }
    }

    return (
        <Container>
            <div className="flex items-start justify-center flex-col">
                <BackButton navigate="/"/>
                <section className="mt-20 flex flex-col items-center xl:flex-row xl:w-full">

                    <img className="xl:max-w-96 w-1/2 px-5 pb-5" src={product?.image} alt={product?.title}/>
                    <div className="flex flex-col justify-between pb-5">
                        <div className="flex lg:items-start flex-col px-5">
                            <span className="font-semibold mb-5 border rounded-3xl bg-white border-black p-2 text-sm self-center xl:self-start">{product?.category}</span>
                            <h2 className="text-xl mb-3">{product?.title}</h2>
                            <span className="font-extrabold mb-5">$ {product?.price}</span>
                            <p className="text-xs mb-10">*Shipping costs $40.00 throughout Brazil. Free for purchases over $100.00.</p>
                            <div>
                                <h3 className="uppercase font-semibold mb-3">Description</h3>
                                <p className="text-sm leading-relaxed">{product?.description}</p>
                            </div>
                        </div>
                        <button 
                            className="flex self-center items-center gap-2 justify-center max-w-96 border border-black bg-cyan-200 py-2 px-10 rounded-3xl font-semibold color-black mt-10" 
                            onClick={handleAddToCart}>
                            <CartIcon/>
                            Add cart
                        </button>
                    </div>
                </section>
            </div>
        </Container>
    )
}