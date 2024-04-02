import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../../ui/icons/search-icon";
import useStore from "@/context/filterContext";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string,
}
export function InputSearch(props: InputProps){
    const { placeholder, ...rest } = props;
    const { setSearch } = useStore();

    return(
        <div className={`relative flex items-center justify-center border border-black rounded-3xl px-2 `}>
            <input
            {...rest}
                className="w-60 focus:outline-none rounded-lg px-3 py-1"
                placeholder={placeholder}
                onChange={e => setSearch(e.target.value)}
            />
            <button className="cursor-pointer">
                <SearchIcon/>
            </button>
        </div>
    )
}