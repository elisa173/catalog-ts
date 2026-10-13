export enum Category {Book, Clothing, Electronics}

export type Status = "available" | "unavailable" | "sale";

export type ID = number | string;

export type Dimensions = [width: number, height: number];

export interface RawProduct {
  id: ID;
  name: string;
  price: number;
  category: Category;
}