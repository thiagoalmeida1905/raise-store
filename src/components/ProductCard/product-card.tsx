interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}
export function ProductCard(props : ProductCardProps){
    return(
        <div className="flex items-center justify-center flex-col w-80 rounded-xl gap-5 border p-4">
{       // eslint-disable-next-line @next/next/no-img-element
}            <img
                className="w-52 h-full"
                src={props.image}
                alt={props.title}
            />
            <div className="bg-white w-full flex flex-col gap-4 items-center">
                <h3 className="text-base font-semibold mt-4">{props.title}</h3>
                <p className="font-bold text-sm">${props.price}</p>
            </div>

            <div className="flex items-center w-full gap-5 mb-3">
                <button className="w-full border p-2 rounded-3xl font-semibold">Add to chart</button>
                <button className="w-full border bg-black text-white p-2 rounded-3xl font-semibold">Buy Now</button>
            </div>
        </div>
    )
}