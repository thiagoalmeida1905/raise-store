import { DataContext } from '@/context/apiContext';
import { useContext } from 'react';


export function useData() {
    return useContext(DataContext);
}
