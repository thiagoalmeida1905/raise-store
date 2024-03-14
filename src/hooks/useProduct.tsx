'use client'


import { Product } from "@/types/products";
import {  useEffect, useState } from "react";

//==============

const apiUrl = 'https://fakestoreapi.com/products/'

export function useProducts() {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getData(){
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Erro ao obter os dados da API');
                }

                const apiData = await response.json();
                setData(apiData);

            } catch (error) {
                console.log('Erro ao obtter os dados da API', error)
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [])

    return {
        data,
        loading
    }
}

