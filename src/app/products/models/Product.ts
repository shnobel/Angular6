import {IProduct} from './IProduct';

export class Product implements IProduct {
    price: number;
    name: string;
    description: string;
    isAvailable: boolean;
    inCart: boolean;

    constructor(name: string, price: number, description: string, isAvailable: boolean, inCart: boolean = false) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.isAvailable = isAvailable;
        this.inCart = inCart;
    }
}
