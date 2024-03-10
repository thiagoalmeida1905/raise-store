'use client'

import { ReactNode, createContext, useEffect, useState } from "react";


interface DataProviderProps {
    children: ReactNode;
}

//==============

const apiUrl = 'https://fakestoreapi.com/products'

export const DataContext = createContext({
    data: [],
});



export function DataProvider({ children}: DataProviderProps ) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            try {
                const response = await fetch(apiUrl)
                if(!response.ok) {
                    throw new Error('Erro ao obter os dados da API');
                }
                const apiData = await response.json();
                setData(apiData);
                console.log('console: apiData', apiData)
            } catch (error) {
                console.log('Erro ao obtter os dados da API', error)
            }
        }

        getData();
    }, [])

    return (
        <DataContext.Provider value={{
            data
        }}>
            {children}
        </DataContext.Provider>
    )
}