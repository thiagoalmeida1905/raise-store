import { create } from 'zustand';
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

interface FilterState {
    search: string;
    type: FilterType;
    category: string;
    priority: PriorityTypes;
    setSearch: (value: string) => void;
    setType: (value: FilterType) => void;
    setCategory: (value: string) => void;
    setPriority: (value: PriorityTypes) => void;
}

const useStore = create<FilterState>((set) => ({
    search: '',
    type: FilterType.All,
    category: '',
    priority: PriorityTypes.Minor_price,
    setSearch: (value) => set({ search: value }),
    setType: (value) => set({ type: value }),
    setCategory: (value) => set({ category: value }),
    setPriority: (value) => set({ priority: value }),
}))

export default useStore;