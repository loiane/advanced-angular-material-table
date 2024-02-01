export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    created: Date;
    active: boolean;
}