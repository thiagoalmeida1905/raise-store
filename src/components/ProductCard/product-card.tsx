interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}
export function ProductCard(props : ProductCardProps){
    return(
        <div className=" flex items-center justify-center flex-col bg-gray-200 bg-opacity-40 backdrop-blur border-b-4 border-white rounded-b-md w-64">
{       // eslint-disable-next-line @next/next/no-img-element
}            <img 
                className="w-64 h-72"
                src={props.image}
                alt={props.title} 
            />
            <h3 className="text-base font-semibold">{props.title}</h3>
            <p className="font-bold text-sm">${props.price}</p>
        </div>
    )
}