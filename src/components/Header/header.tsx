import Link from "next/link";
import { InputSearch } from "../Inputs/input-search";
import { CartControl } from "../CartControl/cart-control";


export function Header() {


    return (
        <div className="w-full flex items-center justify-center h-16 bg-slate-50 mb-4">
            <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
                <span className="w-auto h-auto font-bold">
                    Raise Store
                </span>

                <nav>
                    <ul className="flex">
                        <Link href='/' className="font-medium">Shop</Link>
                    </ul>
                </nav>

                <div className="flex gap-4 justify-center items-center">
                    <InputSearch placeholder="Quick search..."/>
                    <CartControl/>
                </div>

            </header>
        </div>
    )
}