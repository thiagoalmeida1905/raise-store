import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons/search-icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string,
}
export function InputSearch(props: InputProps){
    const { placeholder } = props;

    return(

        <div className="w-72 rounded-3xl justify-center border border-black relative flex items-center px-2  ">
            <input
                className=" w-72 focus:outline-none rounded-lg px-3 py-1"
                placeholder={placeholder}
            />
            <SearchIcon/>
        </div>
    )
}