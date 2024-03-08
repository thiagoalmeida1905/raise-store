'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";


interface DataProviderProps {
    children: ReactNode;
}


//==============

const apiUrl = 'https://fakestoreapi.com/products'

const DataContext = createContext(null);

export function useData() {
    return useContext(DataContext)
}


export function DataProvider({ children}: DataProviderProps ) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(){
            try {
                const response = await fetch(apiUrl)
                if(!response.ok) {
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

    return (
        <DataContext.Provider value={
            data
        }>
            {children}
        </DataContext.Provider>
    )
}