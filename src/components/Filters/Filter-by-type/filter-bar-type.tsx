'use client'
import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import { FilterByPriority } from "../Filter-by-priority/filter-by-priority";


export function FilterByType(){
    const { type, setType, setCategory } = useFilter(); 

    const handleFilterSelection = (value: FilterType, category: string) => {
        setType(value);
        setCategory(category);
    }

    return(
        <div className="flex items-center gap-5 flex-col justify-between md:flex-row">
            <ul className="flex items-center gap-4 flex-wrap list-none justify-center">
                <li
                    className={`font-normal text-xs cursor-pointer border py-2 px-4 rounded-3xl ${type === FilterType.All ? 'bg-black text-white' : ''} `}
                    onClick={() => handleFilterSelection(FilterType.All, '')}>All
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Men ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`}
                    onClick={() => handleFilterSelection(FilterType.Men, 'men\'s clothing')}>Men
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Women ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`}
                    onClick={() => handleFilterSelection(FilterType.Women, 'women\'s clothing')}>Women
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Electronics ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`}
                    onClick={() => handleFilterSelection(FilterType.Electronics, 'electronics')}>Electronics
                </li>
                <li
                    className={`font-normal text-xs cursor-pointer ${type === FilterType.Jewelry ? 'bg-black text-white' : ''} border py-2 px-4 rounded-3xl`}
                    onClick={() => handleFilterSelection(FilterType.Jewelry, 'jewelery')}>Jewelry
                </li>
            </ul>

            <FilterByPriority/>
        </div>
    )
}
