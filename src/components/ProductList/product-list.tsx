'use client'



import { useProducts } from "@/hooks/useProduct";
// import { useProducts } from "@/hooks/useProduct";
import { ProductCard } from "../ProductCard/product-card";
import { Product } from "@/types/products";

interface ProductListProps {

}
export function ProductList(props : ProductListProps){
    const { data } = useProducts();

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center xl:grid-cols-3">
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