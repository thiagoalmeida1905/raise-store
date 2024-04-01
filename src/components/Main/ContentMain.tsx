'use client'


import { Container } from "../common/Container";
import { FilterByType } from "../Filters/Filter-by-type/filter-bar-type";
import { ProductList } from "../Products/ProductList/product-list";
import { useFilter } from "@/hooks/useFilter";


export function Main(){
    const { search, setSearch} = useFilter();
    
    return(
        <Container>
            <main>
                <section className="main-section flex justify-between pt-10 ">
                    <span className="xl:text-3xl font-semibold">Give All You Need</span>
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

                    <section className="mt-10" >
                        <ProductList/>
                    </section>

                </section>
            </main>
        </Container>
    )
}