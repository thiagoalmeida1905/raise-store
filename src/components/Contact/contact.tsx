
export function Contact(){
    return(
        
            <section className="w-full mt-10 rounded-3xl text-white bg-gradient-to-r from-zinc-800 to-zinc-900 flex flex-col lg:h-56 lg:flex-row">
                <div className="rounded-3xl p-6 flex flex-col gap-6 lg:w-2/3 lg:p-10"> 

                    <p className="text-4xl font-medium leading-tight lg:text-5x1">Ready to get Our New Stuff?</p>
                    <div className="flex items-center border-black relative ">
                        <div className="flex rounded-3xl items-center  border-black">
                            <input
                                className="px-4 py-2 rounded-3xl border-none w-80"
                                type="text"
                                placeholder="Your email.."
                            />
                        </div>
                        <button 
                            className="bg-zinc-950 text-white rounded-3xl w-15 px-4 py-2 hover:border absolute left-60"
                        >
                            <p className="text-sm">Search</p>
                        </button>
                    </div>
                </div>

                <div className="place-self-end p-6 flex flex-col gap-3">
                    <p className="text-sm font-bold lg:place-self-auto">Stuffs for Homes and Needs</p>
                    
                    <p className="text-xs leading-relaxed ">Well listen to your needs, indentify the best approach, and then create a bespoke smart EV charging solution thats right for you.</p>
                </div>

            </section>
       
    )
}
