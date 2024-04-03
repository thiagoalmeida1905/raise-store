// useProduct.ts
import { useEffect, useState } from "react";
import { Product } from "@/types/products";

interface UseProductProps {
    productId: string;
}

export function useProductDetails( {productId} : UseProductProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProduct() {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                
                if (!response.ok) {
                    throw new Error('Erro ao obter os dados da API');
                }
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error('Erro ao obter os dados da API:', error);
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    }, [productId]);

    return {
        product,
        loading
    };
}
