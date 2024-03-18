'use client'

import { Contact } from "@/components/Contact/contact";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer/footer";
import { Main } from "@/components/Main/ContentMain";


export default function Home() {

    return (
        <section className="">
            <div className="bg-white w-full h-screen">
                <div
                    className="absolute flex items-center justify-center inset-0 bg-cover bg-center bg-no-repeat h-56 xl:h-5/6 md:h-4/5" 
                    style={{ backgroundImage: `url('/images/bgImg.jpg')` }}>

                    <div 
                        className="relative mx-auto text-center select-none w-full flex bottom-5 lg:-top-7 xl:-top-8 "
                    >
                       <span className="text-white font-extrabold absolute text-9xl w-full">Shop</span>
                    </div>
                </div>
                <div className="absolute bg-white h-auto top-48 xl:top-2/4 sm:top-1/3 md:top-2/4 w-full">

                    <Main/>
                    <Container>
                        <Contact/>
                        <Footer/>
                    </Container>
                </div>

            </div>

        </section>

    );
}
