
"use client";

import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.All,
    category: '',
    priority: PriorityTypes.Minor_price,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
    setCategory: (value: string) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.All);
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState(PriorityTypes.Minor_price);

    return(
        <FilterContext.Provider 
            value={{
                search, 
                page, 
                type, 
                setSearch, 
                setType, 
                setPage, 
                priority, 
                setPriority,
                category,
                setCategory
            }}>
            {children}
        </FilterContext.Provider>
    )
}