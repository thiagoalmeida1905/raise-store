'use client'

import { useState } from "react";
import { Container } from "../Container";
import { FilterByType } from "../Filter-by-type/filter-bar-type";
import { ProductList } from "../ProductList/product-list";
import { useFilter } from "@/hooks/useFilter";


interface MainProps {

}
export function Main(props : MainProps){
    const { search, setSearch} = useFilter();
    
    return(
        <Container>
            <main>
                <section className=" flex justify-between pt-4">
                    <span>Give All You Need</span>
                    <div className="flex items-center">
                        <div className=" w-60 border border-black flex rounded-3xl items-center ">
                            <input
                                className="w-full px-4 py-2 border-black focus:outline-none rounded-3xl"
                                type="text"
                                placeholder="search on Raise Store"
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button 
                                className="bg-zinc-950 text-white px-4 py-2 rounded-3xl"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <FilterByType/>

                    <section className="h-screen mt-10" >
                        <ProductList/>
                    </section>
                </section>
            </main>
        </Container>
    )
}