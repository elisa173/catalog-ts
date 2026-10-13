import { formatPrice } from "../utils/format";
import { Category, ID, Status } from "./types";

export interface Displayable {
display(): string;
}

export abstract class Product implements Displayable {
    constructor(
        public readonly id: ID, 
        public name: string, 
        protected _price: number,
        public category: Category,
        public status: Status = "available" 
    ) {}

    get price(): number {
        return this._price;
    }
    set price(value: number) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }
    }
    abstract summary(): string;

    display(): string {
        return `[${this.id}] ${this.name} - ${formatPrice(this.price)}`;
    }
}

export class Book extends Product {
    constructor(
        id: ID,
        name: string,
        price: number,
        public author: string,
    ) {
        super(id, name, price, Category.Book);
    }
    summary(): string {
        return `${this.name} by ${this.author}`;
    }
}