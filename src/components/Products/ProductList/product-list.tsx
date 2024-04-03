'use client'

import { ProductCard } from "../ProductCard/product-card";
import { useProducts } from "@/hooks/allProducts/useProduct";

import { PriorityTypes } from "@/types/priority-types";
import useStore from "@/context/filterContext";


export function ProductList() {
    const { category, priority, search } = useStore();
    const { data, loading } = useProducts(category);

    // Filtragem por categoria
    let filteredProducts = [...data];
    
    if (priority === PriorityTypes.Biggest_price){
        filteredProducts.sort((a,b) => b.price - a.price);

    } else if ( priority === PriorityTypes.Minor_price) {
        filteredProducts.sort((a,b) => a.price - b.price);
    }

    if (search !== '') {
        const searchTerm = search.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    return (
        <div>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center xl:grid-cols-3">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
