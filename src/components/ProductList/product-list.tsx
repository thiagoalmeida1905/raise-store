'use client'

import { ProductCard } from "../ProductCard/product-card";
import { useState } from 'react';
import { useProducts } from "@/hooks/useProduct";
import { useFilter } from "@/hooks/useFilter";


export function ProductList() {
    const { data, loading } = useProducts();
    const { category, setCategory } = useFilter();

    // Se category for true -> em data(dados da api) faz a filtragem e passa o valor com letras minusculas
    const filteredProducts = category
        ? data.filter(product => product.category.toLowerCase() === category.toLowerCase())
        : data;

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
                        />
                    ))}
                </div>
            )}

        </div>
    );
}
