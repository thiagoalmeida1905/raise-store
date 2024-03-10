'use client'


import { useData } from "@/hooks/useData";
import { ProductCard } from "../ProductCard/product-card";
import { Product } from "@/types/products";

interface ProductListProps {

}
export function ProductList(props : ProductListProps){
    const { data } = useData();

    if (!data) {
        return <div>Carregando...</div>
    }

    return(
        <div className="grid grid-cols-[auto-fill, minmax(256px, 1fr)] gap-5 max-w-full">
            {data.map((product: Product) => <ProductCard
                title={product.title}
                image={product.image}
                price={product.price}
                key={product.id}
            />
            )}
        </div>
    )
}