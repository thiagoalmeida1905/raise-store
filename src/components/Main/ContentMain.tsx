import { Container } from "../Container";


interface MainProps {

}
export function Main(props : MainProps){
    return(
        <Container>
            <main>
                <section className=" flex justify-between pt-4">
                    <span>Give All You Need</span>
                    <div className="flex items-center">
                        <div className=" w-50 border border-black flex rounded-3xl items-center ">
                            <input
                                className="w-full px-4 py-2 border-black focus:outline-none rounded-3xl"
                                type="text"
                                placeholder="search on Raise Store"
                            />
                            <button 
                                className="bg-zinc-950 text-white px-4 py-2 rounded-2xl"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mt-10">
                    <div>
                        <ul className="flex gap-4">
                            <li>All</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Eletronics</li>
                            <li>Jewelery</li>
                        </ul>
                    </div>

                    <section >
                        <div className="h-screen bg-slate-600 mt-10">

                        </div>
                    </section>
                </section>
            </main>
        </Container>
    )
}