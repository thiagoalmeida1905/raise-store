'use client'

import { BackButton } from "@/components/BackButton/back-button";
import { CartItem } from "@/components/Cart/cart-items";
import { Container } from "@/components/Container";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, ProductInCart } from "@/types/products";
import { useEffect, useState } from "react";

export default function CartPage() {
    const [loading, setLoading] = useState(true);
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', []);

    useEffect(() => {
        setLoading(false);
    }, []); 

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Carregando produtos...</p>
            </div>
        );
    }

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price * item.quantity), 0);
    }

    const cartTotal = calculateTotal(value);

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if (item.id !== id) return item
            return { ...item, quantity: quantity }
        })
        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if (item.id !== id) return item
        })
        updateLocalStorage(newValue)
        window.location.reload()
    }

    const deliveryFee = 40.00;
    const cartTotalWithDelivery = Number((cartTotal + deliveryFee)).toFixed(2);

    return (
        <Container>
            <BackButton navigate='/' />
            <div className="flex justify-center flex-col mt-20">
                {value.length === 0 ? (
                    <p className="self-center justify-center my-5 text-sm">Your cart is empty :( <br/> To add products to your cart, browse the store or use the website search. </p>
                ) : (
                    <>
                        <h3 className="uppercase font-bold">Your Cart</h3>
                        <p className="my-5 text-sm">Total ({value.length} products) <span className="font-bold">${cartTotal}</span></p>
                        <div className="flex flex-col lg:flex-row gap-8 ">
                            <ul className="flex flex-col justify-center">
                                {value.map(item =>
                                    <CartItem
                                        product={item}
                                        key={item.id}
                                        handleUpdateQuantity={handleUpdateQuantity}
                                        handleDelete={handleDeleteItem}
                                    />)}
                            </ul>
                            <div className="flex flex-col items-start bg-white h-96 w-full p-5 rounded-lg min-w-80">
                                <h3 className="uppercase font-semibold text-xl mb-8">order summary</h3>
                                <div className="flex flex-col gap-5 w-full font-medium">
                                    <div className="flex justify-between ">
                                        <p>Subtotal of products</p>
                                        <p>${cartTotal}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Delivery</p>
                                        <p>$40.00</p>
                                    </div>
                                    <div className="divider w-11/12 h-0.5 mx-auto bg-black"></div>
                                    <div className="flex justify-between font-bold">
                                        <p>Total</p>
                                        <p>${cartTotalWithDelivery}</p>
                                    </div>
                                    <button className="p-3 rounded-3xl bg-green-400 w-full mt-5 text-white font-semibold">
                                        <p>Complete purchase</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Container>
    )
}
