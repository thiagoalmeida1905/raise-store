'use client';

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import { FilterByPriority } from "../Filter-by-priority/filter-by-priority";

export function FilterByType(){
    const { type, setType } = useFilter(); // useFilter para obter est atual do filtro e a função para atualizar o estado

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

    return(
        <div className="flex items-center justify-between">
            <ul className="flex items-center gap-4 list-none">
                <li
                    className={`font-normal text-xs cursor-pointer border py-2 px-4 rounded-3xl ${type === FilterType.All ? 'bg-black text-white' : ''} `}
                    onClick={() => handleChangeType(FilterType.All)}>
                    All
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Men ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`}
                    onClick={() => handleChangeType(FilterType.Men)}>
                    Men
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Women ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`}
                    onClick={() => handleChangeType(FilterType.Women)}>
                    Women
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Electronics ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`}
                    onClick={() => handleChangeType(FilterType.Electronics)}>
                    Eletronics
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Jewelry ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`} onClick={() => handleChangeType(FilterType.Jewelry)}>
                    Jewelry
                </li>
            </ul>

            <FilterByPriority/>
        </div>
    )
}
