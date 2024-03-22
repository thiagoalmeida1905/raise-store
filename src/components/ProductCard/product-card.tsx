import { useRouter } from "next/navigation"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id: string,
}
export function ProductCard(props : ProductCardProps){

    const router = useRouter();

    const handleNavigate= () => {
        router.push("/product?id=" + props.id)
    }

    return(
        <div 
            className="flex items-center justify-center flex-col w-80 h-96 rounded-xl gap-5 border pt-5 px-2 cursor-pointer"
            onClick={handleNavigate}

        >
{       // eslint-disable-next-line @next/next/no-img-element
}            <img
                className="h-40 max-w-full rounded-lg"
                src={props.image}
                alt={props.title}
            />
            <div className="bg-white w-full flex flex-col gap-4 items-center">
                <h3 className="text-sm font-semibold mt-4">{props.title}</h3>
                <p className="font-bold text-sm">${props.price}</p>
            </div>

            <div className="flex items-center w-full gap-5 mb-3">
                <button className="w-full border p-2 rounded-3xl font-semibold">Add to chart</button>
                <button className="w-full border bg-black text-white p-2 rounded-3xl font-semibold">Buy Now</button>
            </div>
        </div>
    )
}