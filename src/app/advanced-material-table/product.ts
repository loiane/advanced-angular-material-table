export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    created: Date;
    active: boolean;
}

export interface ProductPage {
    data: Product[];
    items: number;
}