import { inherits } from "util";
import { Container } from "../Container";
import { SearchIcon } from "../icons/search-icon";

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
                        <span>Category</span>
                    </div>
                    <section>
                        <div></div>
                    </section>
                </section>
            </main>
        </Container>
    )
}