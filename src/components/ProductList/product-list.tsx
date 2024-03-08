'use client'

import { useData } from "@/context/apiContext"
import { ProductCard } from "../ProductCard/product-card";
import { Product } from "@/types/products";

interface ProductListProps {

}
export function ProductList(props : ProductListProps){
    const data = useData();

    if (!data) {
        return <div>Carregando...</div>
    }

    return(
        <div>
            {data.map((product: any) => <ProductCard
                title={product.title}
                image={product.image}
                price={product.price}
                key={product.id}
            />
            )}
        </div>
    )
}