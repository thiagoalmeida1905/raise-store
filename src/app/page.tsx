import { Container } from "@/components/Container";
import { Main } from "@/components/Main/ContentMain";

export default function Home() {
    return (
        <section className="relative">
            <div className="bg-white w-full h-full">
                <div className="inset-0 bg-cover bg-center h-96 bg-no-repeat" style={{ backgroundImage: `url('/images/bgImg.jpg')`}}>
                </div>
                <div className="absolute bg-transparent right-1/3 top-1/2 transform -translate-y-1/2 font-extrabold text-white mx-auto text-center select-none" style={{fontSize: '15rem'}}>
                    Shop
                </div>
            </div>
            <div className="relative -mt-24">
                <Container>
                    <div className=" z-20 bg-white rounded-lg">
                        <Main/>
                    </div>

                </Container>

            </div>

        </section>

    );
}
