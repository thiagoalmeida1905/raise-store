'use client'

import { useFilter } from "@/hooks/useFilter";
import { ReactNode,  useEffect, useState } from "react";


interface DataProviderProps {
    children: ReactNode;
}

//==============

const apiUrl = 'https://fakestoreapi.com/products/'



export function useProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        async function getData(){
            try {

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Erro ao obter os dados da API');
                }

                const apiData = await response.json();
                setData(apiData);
                console.log(apiData)

            } catch (error) {
                console.log('Erro ao obtter os dados da API', error)
            }
        }

        getData();
    }, [])

    return {
        data,
        setData
    }
}

