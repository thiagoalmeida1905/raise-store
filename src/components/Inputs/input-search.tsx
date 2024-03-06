import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons/search-icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string,
}
export function InputSearch(props: InputProps){
    const { placeholder } = props;

    return(

        <div className="w-72 bg-slate-200  rounded-lg justify-center relative">
            <input
                className=" w-72 bg-slate-200 rounded-lg px-3 py-1"
                placeholder={placeholder}
            />
            <SearchIcon/>
        </div>
    )
}