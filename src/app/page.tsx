'use client'

import { Contact } from "@/components/Contact/contact";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer/footer";
import { Main } from "@/components/Main/ContentMain";
import '@/app/page.css'


export default function Home() {

    return (
        <section className="relative">
            <div className="w-full h-96 xl:h-screen relative">
                <div
                    className="flex bg-cover bg-center bg-no-repeat inset-0 w-full h-full" 
                    style={{ backgroundImage: `url('/images/bgImg.jpg')` } }>
                    
                    <span 
                        className="span-texto font-bold text-white">Shop
                    </span>
                </div>


            </div>
                <div className=" bg-white h-auto w-full absolute xl:top-3/4">
                    <Main/>
                    <Container>
                        <Contact/>
                        <Footer/>
                    </Container>
                </div>

        </section>

    );
}

