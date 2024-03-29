export interface Product {
    id: string,
    title: string, 
    image: string,
    category: string,
    description: string,
    price: number
}

export interface ProductInCart extends Product {
    quantity: number;
}
