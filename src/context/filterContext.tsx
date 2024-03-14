
"use client";

import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    type: FilterType.All,
    category: '',
    priority: PriorityTypes.Minor_price,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setType: (value: FilterType) => {},
    setCategory: (value: string) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('');
    const [type, setType] = useState(FilterType.All);
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState(PriorityTypes.Minor_price);

    return(
        <FilterContext.Provider 
            value={{
                search,  
                type, 
                setSearch, 
                setType, 
                priority, 
                setPriority,
                category,
                setCategory
            }}>
            {children}
        </FilterContext.Provider>
    )
}