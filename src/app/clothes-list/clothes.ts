import { Interface } from "readline/promises";

export interface Clothes {
    name: string;
    description: string;
    type: string;
    price: number;
    stock: number;
    image: string;
    ofer: boolean;
    quantity: number
}